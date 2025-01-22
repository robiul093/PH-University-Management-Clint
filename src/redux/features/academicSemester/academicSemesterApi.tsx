import { baseApi } from "../../api/baseApi";


const academicSemesterApi =  baseApi.injectEndpoints({
    endpoints : (builders) => ({
        getAllSemester: builders.query({
            query: () => ({
                url: "academic-semesters",
                method: "GET"
            }),
        }),
    }),
});


export const {useGetAllSemesterQuery} = academicSemesterApi;