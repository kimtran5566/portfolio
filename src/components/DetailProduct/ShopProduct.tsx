import { useAppSelector } from 'hooks/reduxHook/reduxHook';
import React from 'react'

const ShopProduct = () => {
  const product = useAppSelector((state) => state.product);
  return (
    <div className="mt-4 bg-[#ffffff] p-6">
      <div className="flex">
        <div className="flex w-1/4 border-r">
          <div className="mr-4">
            <img
              className="h-24"
              src="https://down-vn.img.susercontent.com/file/82ef435971b9f8db833b5a80bfa847a5_tn"
              alt="img-shop"
            />
          </div>
          <div className="mt-3">
            <div>{product.brand}</div>
            <div>
              <button className="border border-[#ef5233] rounded-sm bg-[#ffeeea] text-[#ef5233] px-4 py-1 mt-2">
                Chat Ngay
              </button>
            </div>
          </div>
        </div>
        <div className=" pl-6 w-2/3">
          <div className="flex mt-4">
            <div className="flex w-1/3">
              <div className="text-[#757575]">Đánh Giá</div>
              <div className="text-[#ef5233] ml-2">13k</div>
            </div>
            <div className="flex w-1/2">
              <div className="text-[#757575]">Tỉ Lệ Phản Hồi</div>
              <div className="text-[#ef5233] ml-2">99%</div>
            </div>
            <div className="flex w-1/3">
              <div className="text-[#757575]">Tham Gia</div>
              <div className="text-[#ef5233] ml-2">1 năm trước</div>
            </div>
          </div>
          <div className="flex mt-6">
            <div className="flex w-1/3">
              <div className="text-[#757575]">Sản Phẩm</div>
              <div className="text-[#ef5233] ml-2">1k</div>
            </div>
            <div className="flex w-1/2">
              <div className="text-[#757575]">Thời Gian Phản Hồi</div>
              <div className="text-[#ef5233] ml-2">trong vài giờ</div>
            </div>
            <div className="flex w-1/3">
              <div className="text-[#757575]">Người Theo Giỏi</div>
              <div className="text-[#ef5233] ml-2">120k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopProduct
