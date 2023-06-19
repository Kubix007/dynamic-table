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
export const getAllBooksByKind = createAsyncThunk(
  "/book/getAllBooksByKind",
  async (kind: string, thunkAPI) => {
    try {
      return await bookService.getAllBooksByKind(kind);
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
export const getAllBooksByGenreAndKind = createAsyncThunk(
  "/book/getAllBooksByGenreAndKind",
  async (data: { genre: string; kind: string }, thunkAPI) => {
    try {
      return await bookService.getAllBooksByGenreAndKind(data.genre, data.kind);
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
      .addCase(getAllBooksByKind.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBooksByKind.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.books = action.payload;
      })
      .addCase(getAllBooksByKind.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(getAllBooksByGenreAndKind.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBooksByGenreAndKind.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.books = action.payload;
      })
      .addCase(getAllBooksByGenreAndKind.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
