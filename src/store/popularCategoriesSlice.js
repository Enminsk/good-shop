import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "../constants";
import { Api } from "../api/Api";

const api = new Api();

export const fetchPopularCategories = createAsyncThunk('categories/fetchPopularCategories', api.getPopularCategories)

export const { reducer } = createSlice ({
    name: 'category',
    initialState: {
        category: [],
        loadStatus: LOAD_STATUSES.UNKNOWN,
    },
    reducers: { },
    extraReducers: {
        [fetchPopularCategories.pending]: (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;
        },
        [fetchPopularCategories.fulfilled]: (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.category = action.payload;
        },
        [fetchPopularCategories.rejected]: (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
        },
    }
});

