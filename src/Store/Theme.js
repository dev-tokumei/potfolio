import { createSlice } from "@reduxjs/toolkit";

export const theme = createSlice({
    name: "Theme",
    initialState: {
        theme: false,
    },
    reducers: {
        addTheme: (state) => {
            state.theme = true
        },
        removeTheme: (state) => {
            state.theme = false
        }
    }
})


export default theme.reducer
export const {addTheme, removeTheme} = theme.actions