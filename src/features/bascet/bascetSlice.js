import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: [],
  show: false,
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
    },
    show: (state, action) => {
      state.show = action.payload;
    },
  }
});

export const { addOrder, deleteProduct, show } = bascetSlice.actions;
export default bascetSlice.reducer;