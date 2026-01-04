import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogClose,
	DialogFooter,
} from "@/components/ui/dialog";
import CustomButton from "./Button";

export function CustomDialog({
	dialogTitle = "Add Data",
	isOpen,
	setIsOpen,
	fields,
	onSave,
	onClose,
	isDelete = false,
}) {
	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogContent className="sm:max-w-106">
				<DialogHeader>
					<DialogTitle>{dialogTitle}</DialogTitle>
				</DialogHeader>

				{fields}

				<DialogFooter className="mt-4">
					<DialogClose asChild>
						<CustomButton
							buttonText={"Cancel"}
							variant="outline"
							className="w-1/2"
							onClick={onClose}
						/>
					</DialogClose>

					<CustomButton
						buttonText={isDelete ? "Delete" : "Save"}
						className={`w-1/2 ${
							isDelete ? "hover:bg-red-400" : "hover:bg-teal-700"
						}`}
						onClick={onSave}
					/>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
