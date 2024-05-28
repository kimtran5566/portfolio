import React, { useState } from "react";
import ClassifyPopup from "./Popup/ClassifyPopup";
import { useAppDispatch, useAppSelector } from "hooks/reduxHook/reduxHook";
import { counterProduct, delProduct } from "./CenterMainSlice";
import { decrement } from "components/DetailProduct/slice/counterSlice";

type Product = {
	_id: string;
	thumbnail: string;
	images: string[];
	title: string;
	price: number;
	brand: string;
	colors: string[];
	sizes: string[];
	selectColor: string;
	selectSize: string;
	isActiveColor: string;
	isActiveSize: string;
	isValidData: boolean;
	quantity: number;
};

function CenterMain() {
	const cartList = useAppSelector((state) => state.cartList);
	console.log("cartList", cartList);
	const dispatch = useAppDispatch();
	const calculateTotal = (price: number, quantity: number) => {
		return quantity * price;
	};
	const [isOpenClassify, setIsOpenClassify] = useState("");
	const handleTogglePopupClassifyClick = (id: string) => {
		if (!isOpenClassify) {
			setIsOpenClassify(id);
		} else {
			setIsOpenClassify("");
		}
	};

	return (
		<>
			{cartList?.map((product: Product) => (
				<div key={product._id}>
					<div className="bg-[#ffffff] space-y-2">
						<div className="bg-[#ffffff] flex items-center space-x-3 pl-[40px] mt-4 py-4 text-sm">
							<input type="checkbox" className=" size-5" />
							<div className="text-[#ffffff] bg-[#d0011b] rounded h-[33px] w-[40px] p-1 text-base">
								<p className="">Mall</p>
							</div>
							<a href="_blank">NATO | Official Store</a>
							<a href="_blank">
								<img
									src="https://cdn.iconscout.com/icon/free/png-256/free-chat-2639493-2187526.png?f=webp"
									className=" size-6"
									alt={product.title}
								/>
							</a>
						</div>
						<div className=" border-2 [#efedec] mx-6">
							<div className="bg-[#fef3ed] flex h-[40px] items-center space-x-3 text-sm ">
								<div className=" text-[#ed4d2d] border-2 border-[#ed4d2d] mx-2">
									Deal Sốc
								</div>
								<div>Mua kèm deal độc quyền</div>
								<a className="text-[#ed4d2d]" href="_blank">
									Thêm
								</a>
							</div>
							<div className="flex h-[130px]">
								<div className="w-1/2 grow flex justify-center items-center space-x-3 pl-[15px]">
									<input type="checkbox" className=" size-5" />
									<div className="flex text-sm">
										<img src={product.thumbnail} alt="" className="size-20" />
										<div className=" ml-5 space-y-[5px]">
											<div>{product.title}</div>
											<img
												className=" w-64"
												src="https://down-vn.img.susercontent.com/file/vn-50009109-f6d5372f1a938141aaa5c79696d5deb5"
												alt={product.title}
											/>
											<div>7 Ngày Miễn Phí Trả Hàng</div>
										</div>
									</div>
									<div className="text-xs w-[200px]">
										<div
											className="flex items-center space-x-[10px]"
											onClick={() =>
												handleTogglePopupClassifyClick(product.title)
											}
										>
											<button className=" w-[120px] text-sm">
												Phân Loại Hàng:
											</button>
											<svg
												enableBackground="new 0 0 15 15"
												viewBox="0 0 15 15"
												x="0"
												y="0"
												className=" size-3"
											>
												<path d="m6.5 12.9-6-7.9s-1.4-1.5.5-1.5h13s1.8 0 .6 1.5l-6 7.9c-.1 0-.9 1.3-2.1 0z"></path>
											</svg>
										</div>
										<div className=" relative z-10">
											{isOpenClassify === product.title && (
												<ClassifyPopup
													colors={product.colors}
													sizes={product.sizes}
													id={product._id}
												/>
											)}
										</div>
										<div className=" space-x-2">
											<span>Color:{product.selectColor}</span>
											<span>Size:{product.selectSize}</span>
										</div>
									</div>
								</div>
								<div className="flex w-1/2 grow items-center ml-10">
									<div className="basis-1/4 w-[10px]">{product.price}$</div>
									<div className="basis-1/4 space-x-[8px] w-[100px]">
										<button
											className=" border-2 w-[25px]"
											aria-label="Increment value"
											onClick={() =>
												dispatch(counterProduct({ id: product._id, num: -1 }))
											}
										>
											-
										</button>
										<span className="">{product.quantity}</span>
										<button
											className="border-2 w-[25px]"
											aria-label="Decrement value"
											onClick={() =>
												dispatch(counterProduct({ id: product._id, num: 1 }))
											}
										>
											+
										</button>
									</div>
									<div className=" basis-1/4 ml-20">
										{calculateTotal(product.price, product.quantity)}$
									</div>
									<div className=" basis-1/4 flex flex-col items-center pr-[12px]">
										<button
											onClick={() => {
												dispatch(delProduct(product._id));
												dispatch(decrement());
											}}
										>
											Xóa
										</button>
										<div className="flex text-[#ed4d2d]">
											<button className=" w-28">
												Tìm sản phẩm <br /> tương tự
											</button>
											<svg
												enableBackground="new 0 0 15 15"
												viewBox="0 0 15 15"
												x="0"
												y="0"
												className=" size-3"
											>
												<path d="m6.5 12.9-6-7.9s-1.4-1.5.5-1.5h13s1.8 0 .6 1.5l-6 7.9c-.1 0-.9 1.3-2.1 0z"></path>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className=" h-16 px-12 flex items-center border-t-2 space-x-7">
							<img
								className=" size-12"
								src="https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png.webp"
								alt=""
							/>
							<p>Voucher giảm giá đến 25k</p>
							<a className=" text-[#225c8c]" href="_blank">
								Xem thêm voucher
							</a>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
export default CenterMain;
