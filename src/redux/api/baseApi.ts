import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {

        try {
            const state = getState?.() as RootState;
            const token = state?.auth?.token;

            if (token) {
                headers.set('authorization', `${token}`);
            }

        } catch (error) {
            console.log('Error in PrepareHeaders', error)
        };


        return headers
    }
});

const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);
    console.log(result)
    if (result?.error?.status === 401) {

        const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
            method: 'POST',
            credentials: 'include',  // This ensures cookies are included
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('sending refresh token')
        const data = await res.json();
        console.log(data)

        if (data?.data?.accessToken) {

            const user = (api.getState() as RootState).auth.user;

            api.dispatch(
                setUser({
                    user,
                    token: data.data.accessToken
                })
            );

            result = await baseQuery(args, api, extraOptions)
        }else{
            api.dispatch(logout())
        }
    }

    return result;
}


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({})
});