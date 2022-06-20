import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as categoriesReducer } from './sliceCategories'


const rootReducer = combineReducers({
    categories: categoriesReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
