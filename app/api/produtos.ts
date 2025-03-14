import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
export interface ProdutosState {
  value: {}
}

// Define the initial state using that type
const initialState: ProdutosState = {
  value: 0
}

export const ProdutosSlice = createSlice({
  name: 'produtos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setaProdutos: (state, action: PayloadAction<{}>) => {
      state.value = action.payload
    }
  }
})

export const { setaProdutos } = ProdutosSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProdutos = (state: RootState) => state.produtos.value

export default ProdutosSlice.reducer