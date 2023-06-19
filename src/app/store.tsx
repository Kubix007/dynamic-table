import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/bookSlice";
import selectedBookReducer from "../features/selectedBook/selectedBookSlice";
import filterReducer from "../features/filters/filterSlice";

export const store = configureStore({
  reducer: {
    book: booksReducer,
    selectedBook: selectedBookReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
