"use client";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export const Tablee = () => {
	return (
		<div>
			<Table className="mt-8">
				<TableCaption>A list of your recent fabrics.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-25">Date</TableHead>
						<TableHead>Items</TableHead>
						<TableHead>Party</TableHead>
						<TableHead>dating</TableHead>
						<TableHead>bilitno</TableHead>
						<TableHead>total</TableHead>
						<TableHead>base</TableHead>
						<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">INV001</TableCell>
						<TableCell>Paid</TableCell>
						<TableCell>Credit Card</TableCell>
						<TableCell className="text-right">$250.00</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
};
