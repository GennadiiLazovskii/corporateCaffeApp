import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileName: 'Main'
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setProfileName: (state, action) => {
      state.profileName = action.payload;
    }
  }
});

export const { setProfileName } = headerSlice.actions;
export default headerSlice.reducer;
