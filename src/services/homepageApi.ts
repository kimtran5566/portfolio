import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const homepageApiToken =
  "Bearer patbHHxr8jKjOWvkc.e561e50dbe30ebfc59f12964e0cce107281d2c2bbee3c128431686db81bc6516";

interface IBanner {
  fields: {
    src: string;
    alt: string;
    id: string;
  };
}

interface ICategory {
  fields: {
    CustomID: string;
    name: string;
    src: string;
    alt: string;
    id: string;
  };
}

interface IBannerData {
  records: IBanner[];
}

interface ICategoryData {
  records: ICategory[];
}

export const homepageApi = createApi({
  reducerPath: "homepageApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.airtable.com/v0/appLdQNw62LXG4bjz/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `${homepageApiToken}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBanner: builder.query<IBannerData, void>({
      query: () => "tblZcjc5sX0TCbb8O",
    }),

    getCategory: builder.query<ICategoryData, void>({
      query: () => "tblbfrC9cGaclyBdO",
    }),
  }),
});

export const { useGetBannerQuery, useGetCategoryQuery } = homepageApi;
