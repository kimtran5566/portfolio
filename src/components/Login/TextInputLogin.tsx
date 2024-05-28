import React from "react";
import { useField, FieldAttributes } from "formik";

interface TextInputLoginPropsStyle extends FieldAttributes<any> {
	label: string;
}

const TextInputLogin: React.FC<TextInputLoginPropsStyle> = ({
	label,
	...props
}) => {
	const [field, meta] = useField(props.name as string);
	return (
		<>
			{/* <label htmlFor={field.name}>{label}</label> */}
			<input
				className="text-input outline-none grow p-3"
				{...props}
				{...field}
			/>
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

export default TextInputLogin;
