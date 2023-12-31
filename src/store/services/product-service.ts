import { IPaginationParams } from '@/interfaces/pagination-params-interface';
import { IProduct, IProductHttpResponse } from '@/interfaces/product-interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'product-api',
  refetchOnFocus: false,
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skillfactory-task.detmir.team/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductHttpResponse, IPaginationParams>({
      query: (params) => ({
        url: 'products',
        params,
      }),
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge(currentCacheData, responseData) {
        currentCacheData.data.push(...responseData.data);
      },
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
    }),
    getProductById: builder.query<IProduct, string>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
