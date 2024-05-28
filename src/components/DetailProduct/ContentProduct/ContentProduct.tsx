import React from 'react'
import TopContentProduct from './TopContentProduct';
import MidContentProduct from './BottomContentProduct';


const ContentProduct = () => {

  return (
    <div id="content" className="w-3/5 p-6">
      <TopContentProduct/>
      <div className="p-6">
        <MidContentProduct/>
      </div>
    </div>
  );
}

export default ContentProduct
