import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Product = {
  _id:string;
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

export const cartProductsApi = createApi({
  reducerPath: "cartProducts",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),
  endpoints: (builder) => ({
    getCartProducts: builder.query<{ message: string; data: Product[] }, void>({
      query: () => `cartproducts`,
    }),
    updateCartProduct: builder.mutation<{ message: string; data: Product[] }, string>({
      query: (id) => ({ url: `cartproducts/${id}`, method: "UPDATE"}),
    }),
    delCartProduct: builder.mutation<{ message: string }, string>({
      query: (id) => ({ url: `cartproducts/${id}`, method: "DELETE"}),
    }),
    createCartProduct: builder.mutation<{ message: string; data: Product }, Product>({
      query: (product) => ({
        url: "cartproducts",
        body: product,
        method: "POST",
      }),
    }),
  }),
});
export const { useCreateCartProductMutation, useDelCartProductMutation, useGetCartProductsQuery} = cartProductsApi;
