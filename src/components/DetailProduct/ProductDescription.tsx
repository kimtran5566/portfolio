import React from 'react'
import { detailsData } from './data/DetailsData';

const ProductDescription = () => {
  return (
    <>
      <div className="flex mt-4">
        <div className="bg-white w-[80rem]">
          <div className="p-6">
            <div className="mb-10">
              <div className="p-3 bg-[#fafafa] text-xl">CHI TIẾT SẢN PHẨM</div>
              <div className="mt-7 ml-4 mr-4">
                {detailsData.map((item, idx) => (
                  <div key={idx} className="flex mb-4">
                    <div className="w-1/6 text-[#757575]">{item.title}</div>
                    <div>{item.content}</div>
                  </div>

                ))}
              </div>
            </div>
            <div>
              <div className="p-4 bg-[#fafafa] text-xl">MÔ TẢ SẢN PHẨM</div>
              <div className="mt-7 ml-3 mr-3">
                <div className="mb-2">
                  - Thiết kế mang đến sự trẻ trung, lịch sự cho người mặc. Với
                  phong cách độc đáo, dễ mặc dễ mix
                </div>
                <div className="mb-2">
                  - Được làm từ chất liệu vải cao
                  cấp với độ bền vượt trội, có khả năng siêu thấm hút mồ hôi
                  cũng như tạo nên sự thoáng mát dễ chịu cho người mặc.
                </div>
                <div className="mb-2">
                  - Để đi làm,
                  đi học, đi chơi, dạo phố hoặc dự tiệc, sự kiện… có thể kết hợp
                  cùng suit, vest, tuxedo, phụ kiện như giày da, đồng hồ, ví…
                  mang đến một hình ảnh nam tính, gọn gàng, lịch lãm và sang
                  trọng.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDescription
