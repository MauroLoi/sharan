import { createSlice } from "@reduxjs/toolkit";

const pagesSLace = createSlice({
    name: "pages",
    initialState: {
        all: null,
        current: null,
    },
    reducers: {
        setAllPages: (state, { payload }) => { // [{ ... }]
            state.all = payload;
        },
        setCurrentPage: (state, { payload }) => { // { ... }
            state.current = payload;
        }
    }
});

export const { setAllPages, setCurrentPage } = pagesSLace.actions;

export default pagesSLace.reducer;