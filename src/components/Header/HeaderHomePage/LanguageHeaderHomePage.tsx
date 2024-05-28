import React from "react";
import {
	Popover,
	PopoverContent,
	PopoverDescription,
	PopoverTrigger,
} from "features/Popup/Popup";
import { Link } from "react-router-dom";

const LanguageHeaderHomePage = () => {
	return (
		<Popover>
			<PopoverTrigger>
				<Link to="/" className="py-[6px] flex justify-center items-center">
					<div className="w-[14px] h-[18px] flex justify-center items-center mr-1">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.00065 14.6667C11.6825 14.6667 14.6673 11.6819 14.6673 8.00004C14.6673 4.31814 11.6825 1.33337 8.00065 1.33337C4.31875 1.33337 1.33398 4.31814 1.33398 8.00004C1.33398 11.6819 4.31875 14.6667 8.00065 14.6667Z"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M5.33464 8.00004C5.33464 11.6819 6.52854 14.6667 8.0013 14.6667C9.47406 14.6667 10.668 11.6819 10.668 8.00004C10.668 4.31814 9.47406 1.33337 8.0013 1.33337C6.52854 1.33337 5.33464 4.31814 5.33464 8.00004Z"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M1.33398 8H14.6673"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</div>
					<span>Tiếng Việt</span>
				</Link>
			</PopoverTrigger>
			<PopoverContent className="z-50 bg-white border rounded-sm space-y-2 px-2 w-40 focus:border-white">
				<PopoverDescription className="flex flex-col text-start text-sm space-y-3 p-2">
					<span className="hover:text-[#FE6333] text-gray-500">Tiếng Việt</span>
					<span className="hover:text-[#FE6333] text-gray-500">English</span>
				</PopoverDescription>
			</PopoverContent>
		</Popover>
	);
};

export default LanguageHeaderHomePage;
