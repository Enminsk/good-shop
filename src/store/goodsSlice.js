import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "../constants";
import { Api } from "../api/Api";

const api = new Api();

export const fetchGoods = createAsyncThunk('goods/fetchGoods', api.getGoods);

export const { reducer } = createSlice({
    name: 'goods',
    initialState: {
        data: [],
        loadStatus: LOAD_STATUSES.UNKNOWN,
    },
    reducers: { },
    extraReducers: {
        [fetchGoods.pending]: (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;
        },
        [fetchGoods.fulfilled]: (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.data = action.payload;
        },
        [fetchGoods.rejected]: (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
        },
    }
});

