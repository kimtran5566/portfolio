import { ErrorMessage, Field } from "formik";
import React from "react";
interface Props {
	errors: { [field: string]: string };
	touched: { [field: string]: boolean };
	name: string;
	type: string;
	placeholder: string;
	handleClick: ()=> void;
	display: boolean;
}
const CustomInputPassword: React.FC<Props> = ({
	errors,
	touched,
	name,
	type,
	placeholder,
	handleClick,
	display
}) => {
	return (
		<div className="flex flex-col mb-[10px] space-y-2">
			<div
				className={` box-border w-full h-10 border-[1px] rounded-sm flex ${
					errors.name && touched.name ? "border-red-500" : "border-black/15 "
				}  `}
			>
				<Field
					type={type}
					name={name}
					placeholder={placeholder}
					className="p-xl outline-none grow p-3"
				/>
				<button
					type="button"
					className={`p-[15px]  justify-center items-center ${display?"flex":"hidden"}`}
					onClick={handleClick}
				>
					<svg fill="none" viewBox="0 0 20 10" className="w-5 h-4">
						<path
							stroke="none"
							fill="#000"
							fillOpacity=".54"
							d="M19.834 1.15a.768.768 0 00-.142-1c-.322-.25-.75-.178-1 .143-.035.036-3.997 4.712-8.709 4.712-4.569 0-8.71-4.712-8.745-4.748a.724.724 0 00-1-.071.724.724 0 00-.07 1c.07.106.927 1.07 2.283 2.141L.631 5.219a.69.69 0 00.036 1c.071.142.25.213.428.213a.705.705 0 00.5-.214l1.963-2.034A13.91 13.91 0 006.806 5.86l-.75 2.535a.714.714 0 00.5.892h.214a.688.688 0 00.679-.535l.75-2.535a9.758 9.758 0 001.784.179c.607 0 1.213-.072 1.785-.179l.75 2.499c.07.321.392.535.677.535.072 0 .143 0 .179-.035a.714.714 0 00.5-.893l-.75-2.498a13.914 13.914 0 003.248-1.678L18.3 6.147a.705.705 0 00.5.214.705.705 0 00.499-.214.723.723 0 00.036-1l-1.82-1.891c1.463-1.071 2.32-2.106 2.32-2.106z"
						></path>
					</svg>
				</button>
			</div>
			<div className="text-red-500 text-xs">
				<ErrorMessage name={name} />
			</div>
		</div>
	);
};

export default CustomInputPassword;
