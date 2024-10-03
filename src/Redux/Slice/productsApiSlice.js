import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',

    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),

    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products'
        })

        // getCategories: builder.query({
        //     query: () => '/products/categories'
        // }),

        // getUsers: builder.query({
        //     query: () => '/users'
        // }),

        // addProduct: builder.mutation({
        //     query: (newProduct) => ({
        //         url: '/products',
        //         method: 'POST',
        //         body: newProduct
        //     })
        // })
    })
});

export const { useGetProductsQuery } = productsApi;

// export const { useGetProductsQuery, useGetCategoriesQuery, useGetUsersQuery } = productsApi;