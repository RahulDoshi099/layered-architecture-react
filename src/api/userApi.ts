import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../domain/entities/User';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<User[], void>({
      query: () => 'users',
    }),
    addUser: builder.mutation<User, Partial<User>>({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body,
      }),
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useFetchUsersQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation } = userApi;
