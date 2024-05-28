import React from "react";
import { Link } from "react-router-dom";

const HeaderLogin = () => {
	return (
		<header className="flex w-[1200px] h-[84px] mx-auto justify-between items-center">
			<div className="flex items-center space-x-4">
				<Link className="text-[#ee4d2d] text-2xl cursor-pointer" to="/">
					EZ Shop
				</Link>
				<div className="text-[#222] text-2xl">Đăng nhập</div>
			</div>
			<a className="text-[#ee4d2d] mr-[15px] cursor-pointer" href="_blank">
				Bạn cần giúp đỡ?
			</a>
		</header>
	);
};

export default HeaderLogin;
