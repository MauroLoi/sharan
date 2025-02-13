import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice"
import pagesSlice from "./slices/pagesSlice"

export default configureStore({
    reducer: {
        auth: authSlice,
        pages: pagesSlice,
    }
})