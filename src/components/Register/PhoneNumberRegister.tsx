import React from "react";
import PhoneNumberFormRegister from "./PhoneNumberFormRegister";
import { Link } from "react-router-dom";
import GoogleLoginButton from "components/CustomForm/GoogleFaceBookButton/GoogleLoginButton";
import FaceBookLoginButton from "components/CustomForm/GoogleFaceBookButton/FaceBookLoginButton";

const PhoneNumberRegister = () => {
	return (
		<main className="bg-[#EE4E2D]">
			<div className="h-[600px] w-[1040px] flex justify-end items-center mx-auto">
				<div className="flex justify-between w-full">
					<div className="h-[482px]"></div>
					<div className="w-[400px] h-[482px] bg-white box-border shadow-[0_3px_10px_0_rgba(0,0,0,.14)] rounded">
						<h2 className="px-[30px] py-[22px] text-xl text-left ">Đăng Ký</h2>
						<div className="pt-0 px-[30px] pb-[30px]">
							<PhoneNumberFormRegister />

							<div>
								<div className="pb-[14px] flex items-center mt-4">
									<div className="h-[0.5px] w-full bg-[#dbdbdb] flex-1"></div>
									<span className="text-[#ccc] px-4 text-xs">HOẶC</span>
									<div className="h-[0.5px] w-full bg-[#dbdbdb] flex-1"></div>
								</div>
								<div className="flex justify-between m-[-5px]">
									<FaceBookLoginButton />
									<GoogleLoginButton />
								</div>
							</div>
						</div>
						<div className="mb-7 text-xs text-center">
							<div className="px-[25px] mr-[5px]">
								<span>Bằng việc đăng kí, bạn đã đồng ý với EZ Shop về</span>
								<br />
								<a className="text-[#ee4d2d] cursor-pointer" href="_blank">
									Điều khoản dịch vụ
								</a>
								<span className="mx-1">&</span>
								<a className="text-[#ee4d2d] cursor-pointer" href="_blank">
									Chính sách bảo mật
								</a>
							</div>
						</div>
						<div className="mb-[30px]">
							<div className="text-sm p-1 text-[rgba(0,0,0,.26)] flex justify-center items-center w-full pr-1 whitespace-pre">
								Bạn đã có tài khoản?
								<Link
									className="text-[#ee4d2d] font-medium ml-[2px]"
									to="/login"
								>
									Đăng nhập
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default PhoneNumberRegister;
