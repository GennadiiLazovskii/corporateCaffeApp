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
    }
  }
});

export const { addOrder } = bascetSlice.actions;
export default bascetSlice.reducer;