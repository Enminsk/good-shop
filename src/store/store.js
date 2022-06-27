import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as categoriesReducer } from './categoriesSlice';
import { reducer as popularCategoriesReducer } from "./popularCategoriesSlice";


const rootReducer = combineReducers({
    categories: categoriesReducer,
    category: popularCategoriesReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
