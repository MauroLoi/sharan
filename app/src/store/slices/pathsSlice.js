import { createSlice, current } from '@reduxjs/toolkit'

const pathsSlice = createSlice({
    name: 'paths',
    initialState: {
        all: null,
        current: null,
    },
    reducers: {
        setAllPaths: (state, { payload }) => {
            state.all = payload;
        },
        setCurrentPath: (state, { payload }) => {
            state.current = payload;
        },
    }
});

export const { setAllPaths, setCurrentPath } = pathsSlice.actions;

export default pathsSlice.reducer;