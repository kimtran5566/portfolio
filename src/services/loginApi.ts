import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { RootState } from 'store/store'


export const loginApi = createApi({
    reducerPath:"loginApi",
    baseQuery: fetchBaseQuery({
            baseUrl: "http://localhost:3080/",
            prepareHeaders: (headers, {getState}) => {
                const token = (getState() as RootState).user?.token
                if (token)
                {headers.set('Authorization', `Bearer ${token}`)}
                return headers
            },
    }),
    endpoints: builder => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'auth',
                method: 'POST',
                body: credentials,
            }),
        }),
        getUsers: builder.query({
            query:()=> 'users',
        }),
        register: builder.mutation({
            query: (credentials) => ({
                url: 'register',
                method: 'POST',
                body: credentials,
            }),
        }),
    })
})

export const {useLoginMutation, useRegisterMutation,useGetUsersQuery} = loginApi