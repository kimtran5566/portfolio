import { useAppDispatch } from "hooks/reduxHook/reduxHook";
import React, { useEffect, useRef, useState } from "react";
import { changeClassify } from "../CenterMainSlice";

type Colors = string[];

type Sizes = string[];

const ClassifyPopup = ({
	colors,
	sizes,
	id,
}: {
	colors: Colors;
	sizes: Sizes;
	id: string;
}) => {
	const [selectedColor, setSelectedColor] = useState<string | "">("");
	const [selectedSize, setSelectedSize] = useState<string | "">("");
	const [result, setResult] = useState<string | "">("");
	const [showPopup, setShowPopup] = useState<boolean>(true);
	const popupRef = useRef<HTMLDivElement>(null);
  const dispatch= useAppDispatch()

	const handleColorSelect = (colorValue: string) => {
		setSelectedColor(colorValue);
	};

	const handleSizeSelect = (sizeValue: string) => {
		setSelectedSize(sizeValue);
	};

	const handleConfirm = () => {
		if (selectedColor && selectedSize) {
			setResult(`${selectedColor} - ${selectedSize}`);
			setShowPopup(false);
      dispatch(changeClassify({selectedColor, selectedSize, id}))
		} else {
			setResult("Please select color and size");
		}
	};

	const handleDelete = () => {
		setSelectedColor("");
		setSelectedSize("");
		setResult("");
	};

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				popupRef.current &&
				!popupRef.current.contains(event.target as Node)
			) {
				setShowPopup(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [popupRef]);

	return (
		<>
			{showPopup && (
				<div
					ref={popupRef}
					className="absolute border-2 w-72 px-5 top-[50px] right-0 bg-[#ffffff] "
				>
					<div>{result}</div>
					<div className=" py-4 grid grid-cols-4 gap-2">
						<span className=" pl-5">Màu:</span>
						{colors.map((color) => (
							<button
								key={color}
								className={`border-2 hover:border-[#ed4d2d] hover:text-[#ed4d2d] ${
									selectedColor === color ? "border-[#ed4d2d]" : ""
								}`}
								onClick={() => handleColorSelect(color)}
							>
								{color}
							</button>
						))}
					</div>
					<div className=" py-4 grid grid-cols-2 gap-2">
						<span className=" pl-12">Size:</span>
						{sizes.map((size) => (
							<button
								key={size}
								className={`border-2 hover:border-[#ed4d2d] hover:text-[#ed4d2d] ${
									selectedSize === size ? "border-[#ed4d2d]" : ""
								}`}
								onClick={() => handleSizeSelect(size)}
							>
								{size}
							</button>
						))}
					</div>
					<div className=" px-2 py-5 space-x-4">
						<button
							className="border-2 hover:border-[#ed4d2d] w-24 h-12"
							onClick={handleDelete}
						>
							XÓA
						</button>
						<button
							className="border-2 hover:bg-orange-500 bg-[#ed4d2d] w-24 h-12 rounded"
							onClick={handleConfirm}
						>
							XÁC NHẬN
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default ClassifyPopup;
