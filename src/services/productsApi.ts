import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
  interface Product {
    _id: string;
    thumbnail: string;
    images: { name: string; src: string }[];
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
    discountPercentage: number;
    description: string;
    rating: number;
  }


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
  }),
  endpoints: builder => ({
        getProducts: builder.query<{message: string, data: Product[]}, void>({
            query: () => 'products'
        }),
        getDetailProduct: builder.query<{message: string, data: Pick<Product, "thumbnail" | "images" | "title" | "price" | "brand" | "colors" | "sizes" | "selectColor" | "selectSize" | "isActiveColor" | "isActiveSize" | "isValidData" | "quantity">}, string>({
          query: (id) => `products/${id}`
      }),
    }),
})
export const { useGetProductsQuery, useGetDetailProductQuery } = productsApi;

