import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "../constants";
import { Api } from "../api/Api";

const api = new Api();

const fetchCategories = createAsyncThunk('categories/fetchCategories', api.getCategories)


export const { reducer } = createSlice ({
    name: 'categories',
    initialState: {
        categories: [],
        loadStatus: LOAD_STATUSES.UNKNOWN,
    },
    reducers: { },
    extraReducers: {
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
