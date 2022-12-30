import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { theme } from "./Theme";

const rootReducer = combineReducers({
    theme: theme
})


export const storeReducer = configureStore({
    reducer: rootReducer
})
