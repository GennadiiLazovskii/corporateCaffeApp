import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: [],
};

export const bascetSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.order.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.order = state.order.filter((product) => product !== action.payload);
    }
  }
});

export const { addOrder, deleteProduct } = bascetSlice.actions;
export default bascetSlice.reducer;