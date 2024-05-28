import { combineReducers } from "@reduxjs/toolkit";
import dataUserReducer from "../components/Register/slice/dataUserSlice";
import { loginApi } from "services/loginApi";
import { ShoppingCartSlice } from "components/MainShoppingCart/CenterMainSlice";
import { cartProductsApi } from "services/cartProductsApi";
import { productsApi } from "services/productsApi";
import { homepageApi } from "services/homepageApi";
import counterSlice from "components/DetailProduct/slice/counterSlice";
import productSlice from "components/DetailProduct/slice/productSlice";

export const rootReducer = combineReducers({
  user: dataUserReducer,
  [loginApi.reducerPath]: loginApi.reducer,
  [homepageApi.reducerPath]: homepageApi.reducer,
  cartList: ShoppingCartSlice.reducer,
  [cartProductsApi.reducerPath]: cartProductsApi.reducer,
  products: ShoppingCartSlice.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  counter: counterSlice,
  product: productSlice,
});
