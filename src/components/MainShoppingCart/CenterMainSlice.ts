import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  cartProductsApi,
  useGetCartProductsQuery,
} from "services/cartProductsApi";

type Product = {
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
};

const initialState: Product[] = [];
export const ShoppingCartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const product = action.payload;
      state.push(product);
      return state;
    }, 
    changeClassify: (state, action) =>{
      state.map((product) => {
        if (product._id === action.payload.id) {
          console.log('action',action)
          product.selectColor = action.payload.selectedColor
          product.selectSize = action.payload.selectedSize
          console.log('product.colors',product.colors)
          console.log('product.sizes',product.sizes)
        }
        return state
    })
    },
    counterProduct: (state, action) => {
      state.map((product) => {
        if (product._id === action.payload.id) 
           product.quantity += action.payload.num
          return state
      })
    },
    delProduct: (state, action) => {
      const newState = state.filter(
        (product) => product._id !== action.payload
      )
      return state= newState;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      cartProductsApi.endpoints.getCartProducts.matchFulfilled,
      (state, action) => {
        if (action.payload) {
          return (state = [...state, ...action.payload.data]);
        }
      }
    );
  },
});
export const { addToCart, counterProduct, delProduct, changeClassify} = ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;
