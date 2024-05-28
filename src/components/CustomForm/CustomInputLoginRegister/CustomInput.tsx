import React from "react";
import { useField, FieldAttributes } from "formik";

interface CustomInputPropsStyle extends FieldAttributes<any> {
	label: string;
}

const CustomInput: React.FC<CustomInputPropsStyle> = ({
	label,
	...props
}) => {
	const [field, meta] = useField(props.name as string);
	return (
		<>
			<div className="flex flex-col mb-[10px] space-y-2">
				<div
					className={` box-border w-full h-10 border-[1px] rounded-sm flex ${
						meta.touched && meta.error ? "border-red-500" : "border-black/15 "
					}  `}
				>
					{/* <label htmlFor={field.name}>{label}</label> */}
					<input
						className="text-input outline-none grow p-3"
						{...props}
						{...field}
					/>
				</div>
				<div className="text-red-500 text-xs">
					{meta.touched && meta.error ? (
						<div className="error">{meta.error}</div>
					) : null}
				</div>
			</div>
		</>
	);
};

export default CustomInput;
