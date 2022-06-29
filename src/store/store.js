import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer as categoriesReducer } from './categoriesSlice/categoriesSlice';
import { reducer as popularCategoriesReducer } from "./popularCategoriesSlice/popularCategoriesSlice";
import { reducer as goodsReducer } from "./goodsSlice";
import { reducer as categoryPageReducer } from "./categoryPageSlice/categoryPageSlice";



const rootReducer = combineReducers({
    goods: goodsReducer,
    categories: categoriesReducer,
    category: popularCategoriesReducer,
    categoryPage: categoryPageReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
