import { createSlice } from "@reduxjs/toolkit";

interface Product {
  _id: string;
  thumbnail: string;
  images: string[];
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
}

const initialState: Product = {
  _id:"",
  thumbnail: "",
  images: [],
  title: "",
  price: 0,
  brand: "",
  colors: [],
  sizes: [],
  selectColor: "",
  selectSize: "",
  isActiveColor: "",
  isActiveSize: "",
  isValidData: false,
  quantity: 1,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProduct(state, action) {
      console.log('action payload',action.payload)
      state ={
        ...state,
        ...action.payload,
      }
      console.log('state product',state)
      return state;
    },
  },
});
export const { updateProduct } = productSlice.actions;
export default productSlice.reducer;
