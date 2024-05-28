import React from "react";
interface Props {
	disabled: boolean;
	nameButton: string;
}
const CustomButtonLoginRegister: React.FC<Props> = ({
	disabled,
	nameButton,
}) => {
	return (
		<button
			type="submit"
			className={`text-white bg-[#ee4d2d] shadow-[0_1px_1px_rgba(0,0,0,.09)] w-full h-10 px-[10px] rounded-sm ${
				disabled ? "cursor-not-allowed opacity-70" : ""
			}`}
			disabled={disabled}
		>
			{nameButton}
		</button>
	);
};

export default CustomButtonLoginRegister;
