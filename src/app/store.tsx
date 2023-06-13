import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/bookSlice";

export const store = configureStore({
  reducer: {
    book: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
