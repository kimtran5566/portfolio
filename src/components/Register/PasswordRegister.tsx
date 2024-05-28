import React from "react";
import PasswordFormRegister from "./PasswordFormRegister";
import { Link } from "react-router-dom";

const PasswordRegister = () => {
	return (
		<div className="w-[1040px] mx-auto min-h-[600px] flex justify-center items-center">
			<div className="flex flex-col py-[50px]">
				<div className="mb-[60px] flex justify-center items-center">
					<div className="box-border min-w-24 min-h-16 py-2.5 px-1.5 flex flex-col justify-center items-center">
						<span className="bg-[#6c0] border-[#6c0] text-white w-8 h-8 border border-solid border-black/25 rounded-full flex justify-center items-center">
							1
						</span>
						<span className="text-[#6c0] text-xs mt-1.5 ">
							Xác minh số điện thoại
						</span>
					</div>
					<div className="w-[85px] h-[1px] bg-[#6c0]"></div>
					<div className="box-border min-w-24 min-h-16 py-2.5 px-1.5 flex flex-col justify-center items-center">
						<span className="bg-[#6c0] border-[#6c0] text-white w-8 h-8 border border-solid border-black/25 rounded-full flex justify-center items-center">
							2
						</span>
						<span className="text-[#6c0] text-xs mt-1.5 ">Tạo mật khẩu</span>
					</div>
					<div className="w-[85px] h-[1px] bg-black"></div>
					<div className="box-border min-w-24 min-h-16 py-2.5 px-1.5 flex flex-col justify-center items-center">
						<span className=" text-black w-8 h-8 border border-solid border-black/25 rounded-full flex justify-center items-center">
							3
						</span>
						<span className="text-black text-xs mt-1.5 ">Hoàn Thành</span>
					</div>
				</div>
				<div className="w-[500px] box-border shadow-[0_3px_10px_0_rgba(0,0,0,.14)] rounded">
					<div className="min-h-[80px] box-border flex justify-center items-center w-full">
						<Link
							to=".."
							relative="path"
							type="button"
							className="w-[80px] cursor-pointer flex justify-center items-center"
						>
							<svg viewBox="0 0 22 17" className="w-6 h-6 p-1 ">
								<g
									fill="#ee4d2d"
									stroke="none"
									strokeWidth="2"
									fillRule="evenodd"
									transform="translate(-3, -6)"
								>
									<path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z"></path>
								</g>
							</svg>
						</Link>
						<div className="flex flex-1 justify-center items-center text-lg pr-[80px]">
							<p>Thiếp Lập Mật Khẩu</p>
						</div>
					</div>
					<div className="px-[80px] pb-[64px]">
						<p className="mt-[10px] mb-[30px] text-base text-center min-h-10 ">
							Bước cuối! Thiết lập mật khẩu để hoàn tất việc đăng ký.
						</p>
						<PasswordFormRegister />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PasswordRegister;
