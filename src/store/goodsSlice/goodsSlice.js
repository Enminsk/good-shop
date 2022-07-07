import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES, GOODS } from "../constants";
import { Api } from "../../api/Api";

const api = new Api();

export const fetchGoods = createAsyncThunk(`${GOODS}/fetchGoods`, api.getGoods);

export const { reducer } = createSlice({
    name: GOODS,
    initialState: {
        goods: [],
        loadStatus: LOAD_STATUSES.UNKNOWN,
    },
    reducers: { },
    extraReducers: {
        [fetchGoods.pending]: (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;
        },
        [fetchGoods.fulfilled]: (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.goods = action.payload.goods;
        },
        [fetchGoods.rejected]: (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
        },
    }
});

