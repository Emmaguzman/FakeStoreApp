import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api/product";
const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
