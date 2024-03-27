import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../Types/Product";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null as Product | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {
    getProductStart(state) {
      state.loading = true;
      state.error = null;
    },
    getProductSuccess(state, action) {
      state.loading = false;
      state.product = action.payload;
    },
    getProductFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getProductStart, getProductSuccess, getProductFailure } =
  productSlice.actions;

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints(builder) {
    return {
      getProducts: builder.query<Product[], void>({
        query: () => "products",
      }),
      getProductById: builder.query<Product, number>({
        query: (id) => `products/${id}`,
      }),
      getProductsByCategory: builder.query<Product[], string>({
        query: (category) => `products/category/${category}`,
      }),
      getProductCategories: builder.query<string[], void>({
        query: () => "products/categories",
      }),
    };
  },
});

export const { useGetProductsQuery } = productApi;
export const productReducer = productSlice.reducer;
