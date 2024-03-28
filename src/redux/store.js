import { configureStore } from "@reduxjs/toolkit";
import NoDataFoundSliceReducer from "./slices/NoDataFoundSlice";

export const store = configureStore({
    reducer : {
        noDataObj : NoDataFoundSliceReducer
    }
})
