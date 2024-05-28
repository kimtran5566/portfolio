import { ErrorMessage, Field } from "formik";
import React from "react";
interface Props {
	errors: { [field: string]: string };
	touched: { [field: string]: boolean };
	name: string;
}
const CustomInputLoginRegister: React.FC<Props> = ({
	errors,
	touched,
	name,
}) => {
	return (
		<div className="flex flex-col mb-[10px] space-y-2">
			<div
				className={` box-border w-full h-10 border-[1px] rounded-sm flex ${
					errors.name && touched.name ? "border-red-500" : "border-black/15 "
				}  `}
			>
				<Field
					type="tel"
					name={name}
					placeholder="Số điện thoại"
					className="p-xl outline-none grow p-3"
				/>
			</div>
			<div className="text-red-500 text-xs">
				<ErrorMessage name={name} />
			</div>
		</div>
	);
};

export default CustomInputLoginRegister;
