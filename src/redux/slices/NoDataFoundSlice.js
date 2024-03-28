import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    noDataFoundObj : {},
}

const NoDataFoundSlice = createSlice({
    name : 'NoDataFoundSlice',
    initialState : initialState,
    reducers : {
        updateNoDataFoundObj : (state, action) => {
            let updateableObj = action.payload;
            state.noDataFoundObj = updateableObj;
        } 
    }
})

export const { updateNoDataFoundObj } = NoDataFoundSlice.actions;

const NoDataFoundSliceReducer = NoDataFoundSlice.reducer
export default NoDataFoundSliceReducer