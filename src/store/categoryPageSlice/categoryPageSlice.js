import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "../../constants";
import { Api } from "../../api/Api";

const api = new Api();

export const fetchCategoryPage = createAsyncThunk('categoryPage/fetchCategoryPage', api.getGoodsByCategoryId)

export const { reducer } = createSlice({
    name: 'categoryPage',
    initialState: {
        data: [],
        loadStatus: LOAD_STATUSES.UNKNOWN,
    },
    reducers: {},
    extraReducers: {
        [fetchCategoryPage.pending]: (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;
        },
        [fetchCategoryPage.fulfilled]: (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.data = action.payload.items;
        },
        [fetchCategoryPage.rejected]: (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
        },
    }
});

