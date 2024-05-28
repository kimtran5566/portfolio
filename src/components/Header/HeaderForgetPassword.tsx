import React from "react";

const HeaderForgetPassword = () => {
	return (
		<header className="flex w-[1200px] h-[84px] mx-auto justify-between items-center">
			<div className="flex items-center space-x-4">
				<a className="text-[#ee4d2d] text-2xl cursor-pointer" href="_blank">
					EZ Shop
				</a>
				<div className="text-[#222] text-2xl">Đặt lại mật khẩu</div>
			</div>
			<a className="text-[#ee4d2d] mr-[15px] cursor-pointer" href="_blank">
				Bạn cần giúp đỡ?
			</a>
		</header>
	);
};

export default HeaderForgetPassword;
