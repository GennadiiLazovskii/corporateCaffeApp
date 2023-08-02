import {configureStore} from "@reduxjs/toolkit";
import { userSlice } from '../features/user/userSlice';
import { headerSlice } from "../features/header/headerSlice";
import { buttonExitSlice } from "../features/buttonExit/buttonExitSlice";
import { bascetSlice } from "../features/bascet/bascetSlice";
import { shopSlice } from "../features/shop/shopSlice";
import { librarySlice } from "../features/library/librarySlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    shop: shopSlice.reducer,
    library: librarySlice.reducer,
    header: headerSlice.reducer,
    modal: buttonExitSlice.reducer,
    order: bascetSlice.reducer,
  },
});