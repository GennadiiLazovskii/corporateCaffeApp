import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalState: false
};

export const buttonExitSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalContext: (state, action) => {
      state.modalState = action.payload;
    }
  }
});

export const { setModalContext } = buttonExitSlice.actions;
export default buttonExitSlice.reducer;