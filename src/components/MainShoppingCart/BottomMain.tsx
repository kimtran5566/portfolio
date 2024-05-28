import React, { useState } from "react";
import DiscountPopup from "./Popup/DiscountPopup";

function BottomMain() {
  const [isOpenDiscount, setIsOpenDiscount] = useState(false);
  const togglePopupDiscount = () => {
    setIsOpenDiscount(!isOpenDiscount);
  };

  return (
    <>
      <div className=" sticky bottom-0">
        <div className=" h-[45px] flex bg-[#ffffff] border-b 2 border-t 2 justify-end items-center space-x-48 px-6 py-6">
          <div className="flex items-center space-x-3">
            <img
              className=" size-8"
              src="https://salt.tikicdn.com/cache/100x100/ts/upload/20/68/cf/6d4adbdbcd1c35b0a438a655d9a420d0.png.webp"
              alt=""
            />
            <span>Shopee Voucher</span>
          </div>
          <button
            className=" text-[#46648c] text-lg"
            onClick={togglePopupDiscount}
          >
            Chọn hoặc nhập mã
          </button>
          <div className=" relative z-50">
            {isOpenDiscount && <DiscountPopup />}
          </div>
        </div>
        <div className=" h-[40px] flex bg-[#ffffff] border-b 2 justify-end items-center space-x-40 px-6 py-8">
          <div className="flex space-x-3">
            <input type="checkbox" />
            <img
              className=" size-6"
              src="https://salt.tikicdn.com/ts/upload/e3/f0/86/efd76e1d41c00ad8ebb7287c66b559fd.png"
              alt=""
            />
            <span>Shopee Xu</span>
            <span>Dùng 4.100 Shopee Xu</span>
          </div>
          <div>4.100</div>
        </div>
        <div className="h-[45px] flex bg-[#ffffff] justify-between items-center px-6 py-10">
          <div className="flex space-x-8">
            <input type="checkbox" className=" size-5" />
            <span>Chọn Tất Cả</span>
            <button>Xóa</button>
            <button className=" text-[#ed4d2d]">Lưu vào mục Đã thích</button>
          </div>
          <div className="flex space-x-3">
            <span>Tổng thanh toán 0 Sản Phẩm:</span>
            <button className="bg-[#ed4d2d] rounded text-white w-48 h-10">
              Mua Hàng
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomMain;
