import { createApi, fecthBaseQuery } from "@reduxjs/toolkit/query/react";
import { rootApi } from "../../rootApi";
import { CommentData, Comment, CommentDeleteResponse } from "./";


const commentApi = rootApi.injectEndpoints({
  reducerPath: 'commentApi',
  tagTypes: ['Comment', 'UANUTHORIZED', 'UNKNOWN_ERROR'],
  overrideExisting: false,
  endpoints: (builder: any) => ({
    getCommentById: builder.query({
      query: (id: number) => `comment/${id}`,
      providesTags: (result: any, error: any, id) => result ? [{ type: 'Comment', id }] : error?.status === 401 ? ['UANUTHORIZED', 'UNKNOWN_ERROR'],
      keepUnusedDataFor: 5,
    }),
    createComment: builder.mutation<Comment>({
      query: (data: CommentData) {
        return {
          url: `comment`,
          method: 'POST',
          data
        }
      },
      invalidatesTags: (result, error) => [{type: 'Comment', id}],
    }),
    deleteComment: builder.mutation<CommentDeleteResponse>({
      query(id: number) {
        return {
          url: `comment/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: (result, error, id) => [{ type: 'Comment', id }],
    }),
  })
})

export const { useGetCommentQuery, useCreateCommentMutation, useDeleteCommentMutation } = commentApi;

