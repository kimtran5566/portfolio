import React from "react";
import ImagesDetailProduct from "./ImagesDetailProduct";
import ContentProduct from "./ContentProduct/ContentProduct";

const MainContentProduct = () => {
	return (
		<div id="main" className="flex bg-[#ffffff] rounded-sm">
			<ImagesDetailProduct />
			<ContentProduct />
		</div>
	);
};

export default MainContentProduct;
