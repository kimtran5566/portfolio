import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" border-t-4 border-[#ed4d2d] bg-[#ffffff] justify-between py-10 px-56">
        <div className="flex space-x-20">
          <div className="flex flex-col">
            <h1 className=" text-xl mb-5">CHĂM SÓC KHÁCH HÀNG</h1>
            <a href="">Trung Tâm Trợ Giúp</a>
            <a href="">Shopee Blog</a>
            <a href="">Shopee Mall</a>
            <a href="">Hướng Dẫn Mua Hàng</a>
            <a href="">Hướng Dẫn Bán Hàng</a>
            <a href="">Thanh Toán</a>
            <a href="">Shopee Xu</a>
            <a href="">Vận Chuyển</a>
            <a href="">Trả Hàng & Hoàn Tiền</a>
            <a href="">Chăm Sóc Khách Hàng</a>
            <a href="">Chính Sách Bảo Hành</a>
          </div>
          <div className="flex flex-col">
            <h1 className=" text-xl mb-5">VỀ SHOPEE</h1>
            <a href="">Giới Thiệu Về Shopee Việt Nam</a>
            <a href="">Tuyển Dụng</a>
            <a href="">Điều Khoản Shopee</a>
            <a href="">Chính Sách Bảo Mật</a>
            <a href="">Chính Hãng</a>
            <a href="">Kênh Người Bán</a>
            <a href="">Flash Sales</a>
            <a href="">Chương Trình Tiếp Thị Liên Kết Shopee</a>
            <a href="">Liên Hệ Với Truyền Thông</a>
          </div>
          <div className="flex flex-col">
            <h1 className=" text-xl mb-5">THANH TOÁN</h1>
            <div className="flex">
              <img
                src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8"
                alt=""
              />
              <img
                src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16"
                alt=""
              />
              <img
                src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08"
                alt=""
              />
              <img
                src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c"
                alt=""
              />
              <img
                src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281"
                alt=""
              />
              <img
                src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09"
                alt=""
              />
              <img
                src="https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06"
                alt=""
              />
              <img
                src="https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between border-t-2 my-5 pt-5">
          <div>© 2024 Shopee. Tất cả các quyền được bảo lưu.</div>
          <div className="flex space-x-2">
            <div>Quốc gia & Khu vực:</div>
            <a href=""> Singapore |</a>
            <a href="">Indonesia |</a>
            <a href="">Thái Lan |</a>
            <a href="">Malaysia |</a>
            <a href="">Việt Nam |</a>
            <a href="">Philippines |</a>
            <a href="">Brazil |</a>
            <a href="">México |</a>
            <a href="">Colombia |</a>
            <a href="">Chile |</a>
            <a href="">Đài Loan</a>
          </div>
        </div>
      </div>
      <div className=" py-10">
        <div className="flex justify-center space-x-24">
          <a href="">CHÍNH SÁCH BẢO MẬT</a>
          <a href="">QUY CHẾ HOẠT ĐỘNG</a>
          <a href="">CHÍNH SÁCH VẬN CHUYỂN</a>
          <a href="">CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</a>
        </div>
        <div className="flex justify-center items-center space-x-12 py-9">
          <img
            className="size-[8%]"
            src="https://cdn.dangkywebsitevoibocongthuong.com/wp-content/uploads/2018/06/logo.png"
            alt=""
          />
          <img
            className="size-[8%]"
            src="https://cdn.dangkywebsitevoibocongthuong.com/wp-content/uploads/2018/06/logo.png"
            alt=""
          />
          <img
            className="size-[3%] "
            src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center">
          <div>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
            Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng
            đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </div>
          <div>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên
            hệ: 024 73081221 (ext 4678)
          </div>
          <div>
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp
            lần đầu ngày 10/02/2015
          </div>
          <div>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
