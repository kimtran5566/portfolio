import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { loginApi } from "services/loginApi";
import { homepageApi } from "services/homepageApi";
import { cartProductsApi } from "services/cartProductsApi";
import { productsApi } from "services/productsApi";


export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loginApi.middleware)
      .concat(homepageApi.middleware)
      .concat(cartProductsApi.middleware)
      .concat(productsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export default store;
