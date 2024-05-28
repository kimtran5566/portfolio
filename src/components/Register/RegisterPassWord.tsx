import React from "react";

const RegisterPassWord = () => {
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
					<div className="w-[85px] h-[1px] bg-[#6c0]"></div>
					<div className="box-border min-w-24 min-h-16 py-2.5 px-1.5 flex flex-col justify-center items-center">
						<span className="bg-[#6c0] border-[#6c0] text-white w-8 h-8 border border-solid border-black/25 rounded-full flex justify-center items-center">
							3
						</span>
						<span className="text-[#6c0] text-xs mt-1.5 ">Hoàn Thành</span>
					</div>
				</div>
				<div className="w-[500px] box-border shadow-[0_3px_10px_0_rgba(0,0,0,.14)] rounded">
					<div className="min-h-[80px] box-border flex justify-center items-center">

					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterPassWord;
