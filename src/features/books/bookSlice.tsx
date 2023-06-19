import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as SharedTypes from "../../shared/types";
import bookService from "./bookService";
import axios from "axios";

const initialState: SharedTypes.IBookState = {
  books: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//Get all books
export const getAllBooks = createAsyncThunk(
  "/book/getAllBooks",
  async (_, thunkAPI) => {
    try {
      return await bookService.getAllBooks();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }
);

//Get all books
export const getAllBooksByGenre = createAsyncThunk(
  "/book/getAllBooksByGenre",
  async (genre: string, thunkAPI) => {
    try {
      return await bookService.getAllBooksByGenre(genre);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }
);

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.books = action.payload;
      })
      .addCase(getAllBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(getAllBooksByGenre.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBooksByGenre.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.books = action.payload;
      })
      .addCase(getAllBooksByGenre.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
