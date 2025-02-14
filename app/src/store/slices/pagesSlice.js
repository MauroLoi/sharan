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
        },
        addNewPage: (state, { payload }) => {
            state.all.push(payload);
        },
    }
});

export const { setAllPages, setCurrentPage, addNewPage } = pagesSLace.actions;

export default pagesSLace.reducer;