import React from "react";
import {
	Popover,
	PopoverClose,
	PopoverContent,
	PopoverDescription,
	PopoverHeading,
	PopoverTrigger,
} from "features/Popup/Popup";
import { Link } from "react-router-dom";

const NotificationHeaderHomePage = () => {
	return (
		<Popover>
			<PopoverTrigger>
				<Link to="/" className="py-[6px] flex justify-center items-center">
					<div className="w-[14px] h-[18px] flex justify-center items-center mr-1">
						<svg viewBox="3 2.5 14 14" x="0" y="0" fill="white">
							<path d="m17 15.6-.6-1.2-.6-1.2v-7.3c0-.2 0-.4-.1-.6-.3-1.2-1.4-2.2-2.7-2.2h-1c-.3-.7-1.1-1.2-2.1-1.2s-1.8.5-2.1 1.3h-.8c-1.5 0-2.8 1.2-2.8 2.7v7.2l-1.2 2.5-.2.4h14.4zm-12.2-.8.1-.2.5-1v-.1-7.6c0-.8.7-1.5 1.5-1.5h6.1c.8 0 1.5.7 1.5 1.5v7.5.1l.6 1.2h-10.3z"></path>
							<path d="m10 18c1 0 1.9-.6 2.3-1.4h-4.6c.4.9 1.3 1.4 2.3 1.4z"></path>
						</svg>
					</div>
					<span>Thông Báo</span>
				</Link>
			</PopoverTrigger>
			<PopoverContent className="z-50 bg-white border rounded-sm flex flex-col justify-center items-center space-y-2 focus:border-white">
				<PopoverHeading className="text-start text-gray-600">
					Thông báo mới nhận
				</PopoverHeading>
				<PopoverDescription className="bg-[#FFF3EE] flex flex-col w-full">
					<span className="flex space-x-2 p-2">
						<img
							src="https://cf.shopee.vn/file/vn-50009109-91399a1d3ed283d272b069fac5ca989c_xhdpi"
							alt="img-voucher"
							width={30}
							height={30}
						/>
						<span className="flex flex-col">
							<span>Title</span>
							<span className="text-xs text-gray-500">Description</span>
						</span>
					</span>
				</PopoverDescription>
				<PopoverClose className="hover:border-white focus:border-white border-white w-full">
					Xem tất cả
				</PopoverClose>
			</PopoverContent>
		</Popover>
	);
};

export default NotificationHeaderHomePage;
