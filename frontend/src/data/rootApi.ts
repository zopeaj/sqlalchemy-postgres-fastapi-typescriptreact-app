import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginResponse, LoginError, IUserProfileCreate, PasswordRecovery, ResetPassword } from "../interfaces/index";


export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/api/v1/' }),
  tagTypes: ['AUTHENTICATE', 'AUTHORIZED', 'UNAUTHORIZED', 'REGISTRATION', 'UNKNOWN_ERROR'],
  endpoints: (builder: any) => ({
    login: builder.query<LoginResponse, error>({
      query: () => `login`,
      invalidatesTags: (result: LoginResponse) => (result ? ['UNAUTHORIZED'] : []),
    }),
    register: builder.mutation<Register, Partial<Register>>({
      query: (data: IUserProfileCreate) {
        return {
          url: 'register',
          method: 'POST',
          data,
        }
      },
      invalidatesTags: (result, error) => [{ type: 'REGISTRATION' }],
    }),
    passwordRecovery: builder.query<PasswordRecoveryResponse>({
      query: (data: PasswordRecovery) => 'password-recovery',
      return {
        method: 'POST',
        data
      }
    }),
    resetPassword: builder.mutation<PasswordResetResponse>({
      query: (data: ResetPassword) => 'reset-password',
      return {
        method: 'POST',
        data
      }
    })
  })
})

export const { useRegisterMutation, useLoginQuery, usePasswordRecoverQuery, usePasswordResetMutation } = rootApi;
