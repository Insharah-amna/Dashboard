import { Input } from "../ui/input";

const CustomInput = ({
	id,
	label = "",
	type = "text",
	placeholder = "",
	value,
	onChange,
	defaultValue = "",
	className = "",
}) => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={id} className="text-sm text-gray-700 ml-1">
				{label}
			</label>

			<Input
				id={id}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={`${className}`}
				defaultValue={defaultValue}
			/>
		</div>
	);
};

export default CustomInput;
