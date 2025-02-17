import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice"
import pagesSlice from "./slices/pagesSlice"
import pathsSlice from "./slices/pathsSlice"

export default configureStore({
    reducer: {
        auth: authSlice,
        pages: pagesSlice,
        paths: pathsSlice,
    }
})