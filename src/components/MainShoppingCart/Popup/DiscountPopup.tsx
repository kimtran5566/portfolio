import React, { useEffect, useRef, useState } from "react";

function DiscountPopup() {
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const popupRef = useRef<HTMLDivElement>(null);

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
        <>
          <div className=" bg-[#939393]/75 fixed top-0 bottom-0 left-0 right-0"></div>
          <div
            ref={popupRef}
            className=" fixed bg-[#ffffff] border-2 rounded-sm px-5 py-5 top-[100px] left-[550px] right-[550px] z-50 "
          >
            <div className="flex justify-between items-center">
              <div className=" text-2xl">Chọn Shoppee Voucher</div>
              <div>Hỗ Trợ</div>
            </div>
            <div className=" flex justify-center items-center space-x-2 bg-[#f8f8f8] py-3 px-2 my-4">
              <div>Mã Voucher</div>
              <input type="text" className=" border-2 rounded h-10 w-[450px]" />
              <button className=" border-2 rounded px-4 py-2">ÁP DỤNG</button>
            </div>
            <div className=" mb-3">Mã Miễn Phí Vận Chuyển</div>
            <div>
              <div className="flex bg border-2 rounded items-center justify-between">
                <div className=" flex-col bg-[#92d4cc]">
                  <img
                    src="https://cf.shopee.vn/file/sg-11134004-22120-4cskiffs0olvc3"
                    alt=""
                    className=" size-20 ml-7"
                  />
                  <div className=" text-white pb-8 px-3">Mã vận chuyển</div>
                </div>
                <div className=" mr-[300px]">
                  <div>
                    Giảm tối đa 15k <br />
                    Đơn Tối Thiểu 25k
                  </div>
                  <div className=" border-2 border-[#ed4d2d] text-[#ed4d2d] rounded w-32 pl-2 ">
                    Chỉ có trên Live
                  </div>
                  <div>Sắp hết hạn: Còn 9 giờ</div>
                </div>
                <input type="radio" className=" mr-3 size-4" />
              </div>
              <div className=" text-[#ed4d2d] bg-[#fff8e4] text-xl py-2 mb-5">
                Vui lòng chọn sản phẩm trong giỏ hàng để áp dụng Voucher này
              </div>
            </div>
            <div>
              <div className="flex bg border-2 rounded items-center justify-between">
                <div className=" flex-col bg-[#92d4cc]">
                  <img
                    src="https://cf.shopee.vn/file/sg-11134004-22120-4cskiffs0olvc3"
                    alt=""
                    className=" size-20 ml-7"
                  />
                  <div className=" text-white pb-8 px-3">Mã vận chuyển</div>
                </div>
                <div className=" mr-[300px]">
                  <div>
                    Giảm tối đa 50k <br />
                    Đơn Tối Thiểu 0k
                  </div>
                  <div className=" border-2 border-[#ed4d2d] text-[#ed4d2d] rounded w-32 pl-2 ">
                    Chỉ có trên Live
                  </div>
                  <div>Sắp hết hạn: Còn 9 giờ</div>
                </div>
                <input type="radio" className=" mr-3 size-4" />
              </div>
              <div className=" text-[#ed4d2d] bg-[#fff8e4] text-xl py-2 mb-5">
                Vui lòng chọn sản phẩm trong giỏ hàng để áp dụng Voucher này
              </div>
            </div>
            <div className="flex border-t-2 justify-end space-x-2">
              <button className=" border-2 rounded w-20 h-10 my-3">
                TRỞ LẠI
              </button>
              <button className=" border-2 rounded bg-[#ed4d2d] text-white w-20 h-10 my-3">
                OK
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DiscountPopup;
