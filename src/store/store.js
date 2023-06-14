import {configureStore} from "@reduxjs/toolkit";
import { headerSlice } from "../features/header/headerSlice";

export const store = configureStore({
  reducer: {
    header: headerSlice.reducer,
  },
})