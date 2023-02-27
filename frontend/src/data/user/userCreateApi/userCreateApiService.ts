import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootApi } from "../../rootApi";
import { DeleteResponse, UserListResponse } from "./";

const userApi = rootApi.injectEndpoints({
  reducerPath: 'userApi',
  tagTypes: ['User', 'UANUTHORIZED', 'UNKNOWN_ERROR'],
  overrideExisting: false,
  endpoints: (builder: any) => ({
    updateUser: builder.mutation<User, Partial<User>>({
      query(data: any, id: number) {
        return {
          url: `user/${id}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
    }),
    deleteUser: builder.mutation<DeleteResponse>({
      query(id) {
        return {
          url: `user/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{type: 'User', id}],
    }),
    listUsers: builder.query<UserListResponse<User>, number | void>({
      query: (page = 1) => `users?page=${page}`,
    }),
  })
})

export const { useUpdateUserMutation, useDeleteUserMutation, useListUsersQuery } = userApi;
