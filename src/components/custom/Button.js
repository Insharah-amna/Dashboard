import { Button } from "@/components/ui/button";

const CustomButton = ({
	buttonText,
	className,
	type = "button",
	onClick,
	variant = "default",
}) => {
	return (
		<Button
			className={`cursor-pointer ${className}`}
			type={type}
			onClick={onClick}
			variant={variant}
		>
			{buttonText}
		</Button>
	);
};

export default CustomButton;
