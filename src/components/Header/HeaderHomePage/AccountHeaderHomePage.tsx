import { logOut } from "components/Register/slice/dataUserSlice";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverDescription,
} from "features/Popup/Popup";
import { useAppDispatch } from "hooks/reduxHook/reduxHook";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccountHeaderHomePage = () => {
	const dispatch = useAppDispatch();
	const token = localStorage.getItem("token");
	const userName = localStorage.getItem("userName");
	const [isLoggedIn, setIsLoggedIn] = useState(token ?? null);

	return (
		<>
			{isLoggedIn ? (
				<li className="cursor-pointer flex justify-center items-center ">
					<Popover>
						<PopoverTrigger>
							<Link
								to="/"
								className="py-[6px] flex justify-center items-center"
							>
								<div className="w-[14px] h-[18px] flex justify-center items-center mr-1">
									<svg
										enableBackground="new 0 0 15 15"
										viewBox="0 0 15 15"
										x="0"
										y="0"
										fill="white"
									>
										<g>
											<circle
												cx="7.5"
												cy="4.5"
												fill="white"
												r="3.8"
												strokeMiterlimit="10"
											></circle>
											<path
												d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
												fill="white"
												strokeLinecap="round"
												strokeMiterlimit="10"
											></path>
										</g>
									</svg>
								</div>
								<span>{userName}</span>
							</Link>
						</PopoverTrigger>
						<PopoverContent className="z-50 bg-white border rounded-sm px-2 w-40 focus:border-white">
							<PopoverDescription className="flex flex-col text-start text-sm font-semibold space-y-3 p-2">
								<span className="cursor-pointer hover:text-teal-500">
									Tài khoản của tôi
								</span>
								<span className="cursor-pointer hover:text-teal-500">
									Đơn mua
								</span>
								<span
									className="cursor-pointer hover:text-teal-500"
									onClick={() => {
										localStorage.removeItem("token");
										localStorage.removeItem("userName");
										dispatch(logOut());
										setIsLoggedIn(null);
									}}
								>
									Đăng xuất
								</span>
							</PopoverDescription>
						</PopoverContent>
					</Popover>
				</li>
			) : (
				<li className="cursor-pointer flex justify-center items-center ">
					<Link
						to="/login"
						className="py-[6px] flex justify-center items-center"
					>
						<div className="w-[14px] h-[18px] flex justify-center items-center mr-1">
							<svg
								enableBackground="new 0 0 15 15"
								viewBox="0 0 15 15"
								x="0"
								y="0"
								fill="white"
							>
								<g>
									<circle
										cx="7.5"
										cy="4.5"
										fill="white"
										r="3.8"
										strokeMiterlimit="10"
									></circle>
									<path
										d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
										fill="white"
										strokeLinecap="round"
										strokeMiterlimit="10"
									></path>
								</g>
							</svg>
						</div>
						<span>Đăng nhập</span>
					</Link>
				</li>
			)}
		</>
	);
};

export default AccountHeaderHomePage;
