import React from "react";

interface ItemB {
    id: string;
    src: string;
    alt: string;
}

const ItemBanner: React.FC<ItemB> = ({ src, alt, id }) => {
    return (
        <div>
            <img className="w-[796.64px] h-[235px]"
              id = {id}
              src = {src}
              alt = {alt}
            />
          </div>
    )
}
export default ItemBanner