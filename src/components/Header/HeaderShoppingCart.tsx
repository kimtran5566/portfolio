import React from "react";

const HeaderShoppingCart = () => {
  return (
    <>
      <div>
        <div className="bg-[#f8482e] text-white h-11 grid grid-cols-2">
          <div className="mx-56 my-2.5 text-sm">
            <a href="#">Kênh Người Bán </a>|<a href=""> Tải ứng dụng </a>|
            <a href="#"> Kết nối</a>
          </div>
          <div className="text-right mr-56 my-2.5 space-x-5 text-sm">
            <span>Thông Báo </span>
            <span>Hỗ Trợ </span>
            <span>Tiếng Việt </span>
            <span>Tài Khoản</span>
          </div>
        </div>

        <div className="bg-[#ffffff]">
          <div className=" flex justify-between items-center w-[1200px] mx-auto">
            <div className="flex text-3xl">
              <div className="text-[#ed4d2d]">EZShop</div>
              <div className="text-[#ed4d2d]">| Giỏ Hàng</div>
            </div>
            <div className=" my-2.5 border-2 border-[#ed4d2d] w-[600px] flex p-1 rounded	">
              <input
                type="text"
                placeholder="SĂN QUÀ TẶNG 0 ĐỒNG"
                className="p-2 grow outline-none"
              />
              <button className="h-[40px] bg-[#ed4d2d] border-[#ed4d2d] p-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderShoppingCart;
