import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer as categoriesReducer } from './categoriesSlice/categoriesSlice';
import { reducer as popularCategoriesReducer } from "./popularCategoriesSlice/popularCategoriesSlice";
import { reducer as goodsReducer } from "./goodsSlice/goodsSlice";
import { reducer as categoryPageReducer } from "./categoryPageSlice/categoryPageSlice";
import { reducer as productPageReducer } from "./productPageSlice/productPageSlice";



const rootReducer = combineReducers({
    goods: goodsReducer,
    categories: categoriesReducer,
    category: popularCategoriesReducer,
    categoryPage: categoryPageReducer,
    productPage: productPageReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
