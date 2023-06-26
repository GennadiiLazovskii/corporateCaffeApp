import {configureStore} from "@reduxjs/toolkit";
import { userSlice } from '../features/user/userSlice';
import { headerSlice } from "../features/header/headerSlice";
import { buttonExitSlice } from "../features/buttonExit/buttonExitSlice";
import { bascetSlice } from "../features/bascet/bascetSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    header: headerSlice.reducer,
    modal: buttonExitSlice.reducer,
    order: bascetSlice.reducer,
  },
})