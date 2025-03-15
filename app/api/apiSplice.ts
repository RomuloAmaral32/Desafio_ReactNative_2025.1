import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ProdutosState } from '../api/produtos';

// API de produtos
const produtosApi = createApi({
  reducerPath: 'produtosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://treinamentoapi.codejr.com.br/api/documentation#/' }),
  tagTypes: ['Produtos'],
  endpoints: (builder) => ({
    getProdutos: builder.query<ProdutosState[], void>({
      query: () => '/products', 
      providesTags: ['Produtos'],
      transformResponse: (response: ProdutosState[]) => {
        return response.reverse(); 
      },
    }),
    getProdutosById: builder.query<ProdutosState, number>({
      query: (id) => `/products/${id}`,
      providesTags: (result, error, id) => [{ type: 'Produtos', id }],
    }),
    createProduto: builder.mutation<ProdutosState, Partial<ProdutosState>>({
      query: (novoProduto) => ({
        url: '/products',
        method: 'POST',
        body: novoProduto,
      }),
      invalidatesTags: ['Produtos'], // Invalida a lista de produtos para recarregá-la
    }),
    updateProduto: builder.mutation<ProdutosState, { id: number; changes: Partial<ProdutosState> }>({
      query: ({ id, changes }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: changes,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Produtos', id }], // Invalida o produto alterado
    }),
    deleteProduto: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Produtos', id }], // Invalida o produto deletado
    }),
  }),
});

export const { 
  useGetProdutosQuery, 
  useGetProdutosByIdQuery, 
  useCreateProdutoMutation, 
  useUpdateProdutoMutation, 
  useDeleteProdutoMutation 
} = produtosApi;

export default produtosApi.reducer;
