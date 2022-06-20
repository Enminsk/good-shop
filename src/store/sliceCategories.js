import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "../constants";

const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',

)

export const sliceCategories = createSlice ({
    name: 'categories',
    initialState: {
        categories: [],
        loadStatus: LOAD_STATUSES.UNKNOWN,
    },
    redusers: { },
    extraRedusers: {
        [fetchCategories.pending]: (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.categories = action.payload;
        },
        [fetchCategories.rejected]: (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
        },
    }
})

export const actions = {
    fetchCategories
};
