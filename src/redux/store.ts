'use client';
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authSlice from './slices/authSlice';
import productsSlice from './slices/productSlice';

export const store = configureStore({
  reducer: {
    product: productsSlice,
    auth: authSlice,
  },
});

const makeStore = () => store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;