import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const usersApi = createApi({
    reducerPath: "users",
    tagTypes: ["user"],
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/"}),

    endpoints: (build) => ({

        getUsers: build.query({
            query: (arg) => ({
                url: `/users`
            }),
            providesTags: result => ["user"]
        }),
        createUser: build.mutation({
            query: (user) => ({
                url: `/users`,
                method: "POST",
                body: user
            }),
            invalidatesTags: ["user"]
        }),
        createNewTodo: build.mutation({
            query: (user) => ({
                url: `users/${user.id}`,
                method: "PUT",
                body: user
            }),
            invalidatesTags: ["user"]
        }),
        deleteTodo: build.mutation({
            query: (user) => ({
                url: `users/${user.id}`,
                method: "PUT",
                body: user
            }),
            invalidatesTags: ["user"]
        }),

    })
})

export const { useGetUsersQuery, useCreateUserMutation, useCreateNewTodoMutation, useDeleteTodoMutation } = usersApi