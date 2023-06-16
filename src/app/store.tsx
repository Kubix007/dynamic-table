import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/bookSlice";
import selectedBookReducer from "../features/selectedBook/selectedBookSlice";

export const store = configureStore({
  reducer: {
    book: booksReducer,
    selectedBook: selectedBookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
