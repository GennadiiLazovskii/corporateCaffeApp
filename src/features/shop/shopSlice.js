import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShop = createAsyncThunk('shop/fetchShop', async () => {
  const response = await axios.get('http://localhost:3000/shop');
  return response.data;
});

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    shop: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShop.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchShop.fulfilled, (state, action) => {
        state.shop = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchShop.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      });
  },
});

export default shopSlice.reducer;