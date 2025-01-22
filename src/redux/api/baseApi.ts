import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {

        try {
            const state = getState?.() as RootState;
            const token = state?.auth?.token;

            if (token) {
                headers.set('Authorization', `${token}`);
            }

        } catch (error) {
            console.log('Error in PrepareHeaders', error)
        };


        return headers
    }
});

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    endpoints: () => ({})
});