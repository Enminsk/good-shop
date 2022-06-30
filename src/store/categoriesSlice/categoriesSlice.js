import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES, CATEGORIES } from "../constants";
import { Api } from "../../api/Api";

const api = new Api();

export const fetchCategories = createAsyncThunk(`${CATEGORIES}/fetchCategories`, api.getCategories);

export const { reducer } = createSlice ({
    name: CATEGORIES,
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
            state.categories = action.payload.categories;
        },
        [fetchCategories.rejected]: (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
        },
    }
});

