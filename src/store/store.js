import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer as categoriesReducer } from './categoriesSlice/categoriesSlice';
import { reducer as popularCategoriesReducer } from "./popularCategoriesSlice/popularCategoriesSlice";
/* import { reducer as goodsReducer } from "./goodsSlice"; */


const rootReducer = combineReducers({
/*     goods: goodsReducer, */
    categories: categoriesReducer,
    category: popularCategoriesReducer,
    
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
