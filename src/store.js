import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./utils/homeSlice";

export const store = configureStore({
    reducer : {
       home : homeReducer
    },
});