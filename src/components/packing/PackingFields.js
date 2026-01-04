import React from "react";
import CustomInput from "../custom/Input";

const PackingFields = ({ packingFields, setPackingFields }) => {
	return (
		<div className="grid gap-4">
			<CustomInput
				id="PackingDate"
				label="Packing Date"
				type="datetime-local"
				value={packingFields[0]}
				onChange={(e) =>
					setPackingFields((prev) => [e.target.value, ...prev.slice(1)])
				}
			/>
			<div className="flex gap-4">
				<CustomInput
					id="Lat_No"
					label="Lat_No"
					type="number"
					value={packingFields[1]}
					onChange={(e) =>
						setPackingFields((prev) => [
							prev[0],
							e.target.value,
							...prev.slice(2),
						])
					}
				/>
				<CustomInput
					id="Volume_No"
					label="Volume_No"
					type="number"
					value={packingFields[2]}
					onChange={(e) =>
						setPackingFields((prev) => [
							...prev.slice(0, 2),
							e.target.value,
							...prev.slice(3),
						])
					}
				/>
			</div>
			<div className="flex gap-4">
				<CustomInput
					id="Quantity"
					label="Quantity"
					type="number"
					value={packingFields[3]}
					onChange={(e) =>
						setPackingFields((prev) => [
							...prev.slice(0, 3),
							e.target.value,
							...prev.slice(4),
						])
					}
				/>
				<CustomInput
					id="A_Grade"
					label="A_Grade"
					type="number"
					value={packingFields[4]}
					onChange={(e) =>
						setPackingFields((prev) => [
							...prev.slice(0, 4),
							e.target.value,
							...prev.slice(5),
						])
					}
				/>
				<CustomInput
					id="B_Grade"
					label="B_Grade"
					type="number"
					value={packingFields[5]}
					onChange={(e) =>
						setPackingFields((prev) => [
							...prev.slice(0, 5),
							e.target.value,
							prev[6],
						])
					}
				/>
			</div>
			<CustomInput
				id="Shirt_fabric"
				label="Shirt Fabric"
				value={packingFields[6]}
				onChange={(e) =>
					setPackingFields((prev) => [...prev.slice(0, 6), e.target.value])
				}
			/>
		</div>
	);
};

export default PackingFields;
