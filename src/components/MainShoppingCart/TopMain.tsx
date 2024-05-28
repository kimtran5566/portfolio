import React from "react";

function TopMain() {
  return (
    <>
      <div className=" bg-[#f5f5f5] mt-7">
        <div className="border-2 h-11 flex border-orange-300 my-3 bg-[#ffffff]">
          <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/d9e992985b18d96aab90.png"
            alt=""
            className="flex-none "
          />
          <span className="flex-initial my-[8px] text-sm">
            Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển
            bạn nhé!
          </span>
        </div>
        <div className=" bg-[#ffffff] flex items-center justify-between px-10 h-12 ">
          <div className="flex w-1/2 grow space-x-5 items-center ">
            <input type="checkbox" className=" size-5" />
            <div>Sản Phẩm</div>
          </div>
          <div className="flex w-1/2 space-x-[50px] items-center">
            <div className=" basis-1/4">Đơn Giá</div>
            <div className=" basis-1/4">Số Lượng</div>
            <div className=" basis-1/4">Số Tiền</div>
            <div className=" basis-1/4">Thao Tác</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopMain;
