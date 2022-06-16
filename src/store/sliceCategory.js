import { createSlice } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "../constants";

export const { actions, reduser } = createSlice ({
    name: 'category',
    initialState: { 
        loadStatus: LOAD_STATUSES.UNKNOWN,
        //Что сюда еще нужно?
    },
    redusers: {
        
    }
})
