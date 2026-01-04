"use client";
import { useEffect, useState } from "react";
import { TableCell, TableRow } from "../ui/table";
import CustomButton from "../custom/Button";
import { CustomDialog } from "../custom/Dialog";
import { CustomTable } from "../custom/CustomTable";
import PackingFields from "./PackingFields";
import { packingHeaderItems } from "../constants/Packing";

const PackingModel = () => {
	const [packings, setPackings] = useState([]);
	const [packingFields, setPackingFields] = useState([
		"",
		"",
		"",
		"",
		"",
		"",
		"",
	]); // PackingDate, Lat_No, Volume_No, Quantity, A_Grade, B_Grade, Shirt_fabric
	const [loading, setLoading] = useState(true);
	const [alert, setAlert] = useState({ show: false, msg: "" });
	const [isEdit, setIsEdit] = useState(false);
	const [selectedId, setSelectedId] = useState(null);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [deleteOpen, setDeleteOpen] = useState(false);

	const fetchPackings = async () => {
		try {
			const res = await fetch("http://localhost:3001/packing");
			const data = await res.json();
			setPackings(data);
		} catch (err) {
			console.error("Failed to fetch packings:", err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchPackings();

		if (isEdit && selectedId) {
			// Load single packing for edit
			const loadSingle = async (id) => {
				const res = await fetch(`http://localhost:3001/packing/${id}`);
				const json = await res.json();
				setPackingFields([
					json.PackingDate,
					json.Lat_No,
					json.Volume_No,
					json.Quantity,
					json.A_Grade,
					json.B_Grade,
					json.Shirt_fabric,
				]);
			};
			loadSingle(selectedId);
		}
	}, [isEdit, selectedId]);

	// Save new or edited packing
	const onSave = async () => {
		if (packingFields.some((f) => f === "")) {
			setAlert({ show: true, msg: "Please fill all fields" });
			return;
		}

		const payload = {
			PackingDate: packingFields[0],
			Lat_No: Number(packingFields[1]),
			Volume_No: Number(packingFields[2]),
			Quantity: Number(packingFields[3]),
			A_Grade: Number(packingFields[4]),
			B_Grade: Number(packingFields[5]),
			Shirt_fabric: packingFields[6],
		};

		const url = isEdit
			? `http://localhost:3001/packing/${selectedId}`
			: "http://localhost:3001/packing";

		const method = isEdit ? "PATCH" : "POST";

		try {
			const res = await fetch(url, {
				method,
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			if (!res.ok) throw new Error("Failed to save packing!");

			fetchPackings();
			setDialogOpen(false);
			setPackingFields(["", "", "", "", "", "", ""]);
			setSelectedId(null);
			setAlert({ show: false, msg: "" });
		} catch (err) {
			console.error(err);
			alert("Error saving packing!");
		}
	};

	const handleDelete = async (id) => {
		try {
			const res = await fetch(`http://localhost:3001/packing/${id}`, {
				method: "DELETE",
			});
			if (!res.ok) throw new Error("Failed to delete!");

			setPackings((prev) => prev.filter((p) => p._id !== id));
			setSelectedId(null);
			setDeleteOpen(false);
		} catch (err) {
			console.error(err);
			alert("Error deleting packing!");
		}
	};

	if (loading) return <p>Loading packings...</p>;

	return (
		<div className="flex flex-col gap-6 px-2">
			<div className="flex items-start justify-between">
				<h1 className="text-xl mt-2 font-semibold">Manage Packings</h1>

				<CustomButton
					buttonText="Add Packing"
					className="bg-teal-600 rounded-sm"
					onClick={() => {
						setIsEdit(false);
						setPackingFields(["", "", "", "", "", "", ""]);
						setDialogOpen(true);
					}}
				/>

				<CustomDialog
					isOpen={dialogOpen}
					setIsOpen={setDialogOpen}
					dialogTitle={isEdit ? "Edit Packing" : "Add Packing"}
					onSave={onSave}
					onClose={() => setPackingFields(["", "", "", "", "", "", ""])}
					fields={
						<PackingFields
							packingFields={packingFields}
							setPackingFields={setPackingFields}
						/>
					}
				/>

				{deleteOpen && (
					<CustomDialog
						isOpen={deleteOpen}
						setIsOpen={setDeleteOpen}
						dialogTitle="Delete Confirmation"
						onSave={() => handleDelete(selectedId)}
						onClose={() => setDeleteOpen(false)}
						isDelete={true}
						fields={<p>Are you sure you want to delete this Packing record?</p>}
					/>
				)}
			</div>

			<div className="px-1">
				<CustomTable
					tableHeaders={packingHeaderItems}
					tableBody={
						<>
							{packings.map((packing) => (
								<TableRow key={packing._id}>
									<TableCell>
										{new Date(packing.PackingDate).toLocaleDateString("en-US")}
									</TableCell>
									<TableCell>{packing.Lat_No}</TableCell>
									<TableCell>{packing.Volume_No}</TableCell>
									<TableCell>{packing.Quantity}</TableCell>
									<TableCell>{packing.A_Grade}</TableCell>
									<TableCell>{packing.B_Grade}</TableCell>
									<TableCell>{packing.Shirt_fabric}</TableCell>
									<TableCell className="text-right">
										<CustomButton
											buttonText="Edit"
											className="text-blue-500 hover:text-blue-500"
											variant="ghost"
											onClick={() => {
												setIsEdit(true);
												setSelectedId(packing._id);
												setDialogOpen(true);
											}}
										/>
										<CustomButton
											buttonText="Delete"
											className="text-red-500 hover:text-red-500"
											variant="ghost"
											onClick={() => {
												setSelectedId(packing._id);
												setDeleteOpen(true);
											}}
										/>
									</TableCell>
								</TableRow>
							))}
							{packings.length === 0 && (
								<TableRow>
									<TableCell
										colSpan={8}
										className="text-center py-4 text-gray-500"
									>
										No packings added yet.
									</TableCell>
								</TableRow>
							)}
						</>
					}
				/>
			</div>
		</div>
	);
};

export default PackingModel;
