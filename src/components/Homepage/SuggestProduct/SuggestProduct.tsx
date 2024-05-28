import {useGetProductsQuery} from "services/productsApi";
import ItemSuggest from "../Item/DataSuggest";
import { useState } from "react";
import { useAppDispatch } from "hooks/reduxHook/reduxHook";
import { updateProduct } from "components/DetailProduct/slice/productSlice";
import { useNavigate } from "react-router-dom";

interface Product {
  _id: string;
  thumbnail: string;
  images: { name: string; src: string }[];
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
  discountPercentage: number;
  rating: number;
}

const SuggestProduct = () => {
	const { data } = useGetProductsQuery();
	const [hoveredId, setHoveredId] = useState<string | null>(null);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

  const handleClick = async (product: Product) => {
    console.log("product suggest", product);
    const {discountPercentage, rating, ...newProduct } = {
      ...product,
    };
    await dispatch(updateProduct(newProduct));
    await navigate("/detail_product");
  };
  const handleMouseEnter = (_id: string) => {
    setHoveredId(_id);
  };
  const handleMouseLeave = () => {
    setHoveredId(null);
  };


  return (
    <div className="block pt-[10px] min-h-screen md:min-h-[calc(100vh - 11.25rem)]">
      <div className="grid grid-cols-6 flex-row gap-3">
        {data?.data.map((product) => (
          <div
            key={product._id}
            className={`col-span-1 bg-[#fff] relative group transition duration-300 cursor-pointer ${
              hoveredId === product._id ? "-translate-y-0.5" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(product._id)}
            onMouseLeave={()=> handleMouseLeave()}
            onClick={() => handleClick(product)}
          >
            <ItemSuggest
              thumbnail={product.thumbnail}
              alt={product.title}
              title={product.title}
              price={product.price}
              rating={product.rating}
              discountPercentage={product.discountPercentage}
            />
            {hoveredId === product._id && (
              <div className="absolute inset-0 ring-1 ring-orange-500 transform transition duration-300 -translate-y-0.5 pointer-events-none"></div>
            )}
          </div>
        ))}
      </div>
      <div className="mx-auto w-[1200px] h-[40px] flex justify-center pt-28 pb-16">
        <button className="w-[390px] h-[40px] border border-gray-300 bg-[#fff] hover:bg-slate-200">
          <a href="_blank">Xem Thêm</a>
        </button>
      </div>
    </div>
  );
};

export default SuggestProduct;
