import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Defina o estado inicial
export interface ProdutosState {
  value: {}; // Alterar depois, se necessário
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProdutosState = {
  value: {},
  status: 'idle',
  error: null,
};

// Crie uma thunk para buscar produtos da API
export const fetchProdutos = createAsyncThunk(
  'produtos/fetchProdutos',
  async () => {
    const response = await fetch('https://treinamentoapi.codejr.com.br/docs/api-docs.json'); // ajuste o endpoint da API
    if (!response.ok) {
      throw new Error('Erro ao buscar os produtos');
    }
    const data = await response.json();
    return data; // Retorne os dados da API
  }
);

export const ProdutosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    // Caso queira alguma ação adicional
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProdutos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProdutos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload; // Armazene os produtos recebidos no estado
      })
      .addCase(fetchProdutos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Erro desconhecido';
      });
  },
});

export default ProdutosSlice.reducer;
export const selectProdutos = (state: RootState) => state.produtos.value;

