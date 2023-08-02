import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLibrary = createAsyncThunk('library/fetchLibrary', async () => {
  const response = await axios.get('http://localhost:3000/library');
  return response.data;
});

export const librarySlice = createSlice({
  name: 'library',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLibrary.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLibrary.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchLibrary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      });
  },
});

export default librarySlice.reducer;