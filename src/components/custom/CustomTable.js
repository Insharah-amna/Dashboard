import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
} from "@/components/ui/table";

export function CustomTable({ tableHeaders, tableBody }) {
	return (
		<Table>
			<TableHeader className="border-b-2 border-b-gray-200">
				{tableHeaders.map((header) => (
					<TableHead
						key={header.title}
						className={`text-md font-semibold last:text-center`}
					>
						{header.title}
					</TableHead>
				))}
			</TableHeader>

			<TableBody>{tableBody}</TableBody>
		</Table>
	);
}
