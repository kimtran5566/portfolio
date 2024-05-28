import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { increment } from "../slice/counterSlice";
import { updateProduct } from "../slice/productSlice";
import { useAppSelector } from "hooks/reduxHook/reduxHook";
import { addToCart } from "components/MainShoppingCart/CenterMainSlice";

const BottomContentProduct = () => {
	const product = useAppSelector((state) => state.product);
	

	console.log("colors", product);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleSelectColor = (e: any) => {
		const value = e.target.value;
		dispatch(
			updateProduct({ selectColor: product.selectColor === value ? "" : value })
		);
	};
	const handleSelectSize = (e: any) => {
		const value = e.target.value;
		dispatch(updateProduct({ selectSize: product.selectSize === value ? "" : value }));
	};
	const handleMouseEnterColor = (e: any) => {
		const isActiveColor = e.target.value;
		dispatch(updateProduct({ isActiveColor: isActiveColor }));
	};
	const handleMouseEnterSize = (e: any) => {
		const isActiveSize = e.target.value;
		dispatch(updateProduct({ isActiveSize: isActiveSize }));
	};
	const handleMouseLeaveColor = () => {
		dispatch(updateProduct({ isActiveColor: "" }));
	};
	const handleMouseLeaveSize = () => {
		dispatch(updateProduct({ isActiveSize: "" }));
	};
	const counter = (num: number) => {
		if (product.quantity === 1 && num > 0) {
			return dispatch(updateProduct({ quantity: product.quantity + num }));
		}
		if (product.quantity > 1) {
			return dispatch(updateProduct({ quantity: product.quantity + num }));
		}
	};
	const handleBlur = () => {
		if (product.quantity === 0) {
			return dispatch(updateProduct({ quantity: 1 }));
		}
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		dispatch(updateProduct({ quantity: +value }));
	};
	const handleButtonBuyNow = () => {
		if (product.selectColor && product.selectSize) {
			navigate("/shoppingcart");
		} else {
			dispatch(updateProduct({ isValidData: true }));
		}
	};
	useEffect(() => {
		if (product.selectColor && product.selectSize) {
			dispatch(updateProduct({ isValidData: false }));
		}
	}, [product.selectColor, product.selectSize, dispatch]);
	const handleAddToCart = () => {
		if (product.selectColor && product.selectSize) {
			dispatch(updateProduct({ isValidData: false }));
			dispatch(increment());
			dispatch(addToCart(product));
			console.log(product);
		} else {
			dispatch(updateProduct({ isValidData: true }));
		}
	};

	return (
		<>
			<div>
				<div className="flex p-1 mb-6">
					<div className="text-[#757575] w-1/6">Vận Chuyển</div>
					<div>
						<div className="flex">
							<div className="w-1/7">
								<img
									className="h-6"
									src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png"
									alt="img"
								/>
							</div>
							<div className="ml-2 mb-3">Miễn phí vận chuyển</div>
						</div>
						<div className="flex">
							<div className="w-1/7">
								<img
									className="h-6 mx-1"
									src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/baa823ac1c58392c2031.svg"
									alt="img"
								/>
							</div>
							<div className="mx-2 text-[#757575]">
								<div className="mb-2.5">Vận Chuyển Tới</div>
								<div>Phí Vận Chuyển</div>
							</div>
							<div>
								<div className="ml-6 mb-2.5">
									<button>
										<span className="font-semibold">Tp. Hồ Chí Minh</span>
									</button>
								</div>
								<div className="ml-6">
									<button>
										<span>₫0</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={`${product.isValidData && "bg-[#fff5f5] p-2"}`}>
					<div className="flex p-1 mb-6">
						<div className="text-[#757575] w-1/6 mt-2">
							<div>Màu Sắc</div>
						</div>
						<div className="flex flex-wrap">
							{product.colors.map((color, index) => (
								<div key={index}>
									<button
										value={color}
										onClick={(e) => handleSelectColor(e)}
										className={`${
											product.selectColor === color || product.isActiveColor === color
												? "border border-red-500 text-red-500 rounded-sm mr-2 p-2 w-28"
												: ""
										} border border-gray-300 rounded-sm mr-2 p-2 w-28 bg-white`}
										onMouseEnter={(e) => {
											handleMouseEnterColor(e);
										}}
										onMouseLeave={() => handleMouseLeaveColor()}
									>
										{color}
									</button>
								</div>
							))}
						</div>
					</div>
					<div className="flex p-1 mb-6 ">
						<div className="text-[#757575] w-1/6 mt-2">
							<div>Size</div>
						</div>
						<div className="flex flex-wrap">
							{product.sizes.map((size, index) => (
								<div key={index}>
									<button
										value={size}
										onClick={(e) => handleSelectSize(e)}
										className={`${
											product.selectSize === size || product.isActiveSize === size
												? "border border-red-500 text-red-500 rounded-sm mr-2 p-2 w-20"
												: ""
										}border border-gray-300 rounded-sm mr-2 p-2 w-20 mb-2 bg-white`}
										onMouseEnter={(e) => {
											handleMouseEnterSize(e);
										}}
										onMouseLeave={() => handleMouseLeaveSize()}
									>
										{size}
									</button>
								</div>
							))}
						</div>
					</div>
					<div className="flex mb-2 p-1">
						<div className="text-[#757575] w-1/6">
							<div>Số Lượng</div>
						</div>
						<div>
							<button
								onClick={() => counter(-1)}
								className="border border-gray-300 rounded-l-sm w-8 p-1 bg-white"
							>
								-
							</button>
							<input
								className="border-y border-gray-300 p-1 w-1/5 text-center"
								value={product.quantity}
								type="text"
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<button
								onClick={() => counter(1)}
								className="border border-gray-300 rounded-r-sm w-8 p-1 bg-white"
							>
								+
							</button>
						</div>
					</div>
					<div className="flex">
						<div className="w-1/6"></div>
						{product.isValidData && (
							<div className="text-[#ee4d2d]">Vui lòng chọn Phân Loại Hàng</div>
						)}
					</div>
				</div>
			</div>

			<div className="mt-6">
				<button
					onClick={handleAddToCart}
					className="border border-[#ef5233] rounded-[3px] bg-[#ffeeea] px-5 py-3 text-[#ef5233]"
				>
					thêm vào giỏ hàng
				</button>
				<button
					onClick={handleButtonBuyNow}
					onMouseDown={handleAddToCart}
					className="border rounded-[3px] bg-[#ee4d2d] ml-4 px-8 py-3 text-white"
				>
					mua ngay
				</button>
			</div>
		</>
	);
};

export default BottomContentProduct;
