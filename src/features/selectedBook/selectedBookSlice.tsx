import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as SharedTypes from "../../shared/types";
import axios from "axios";
import selectedBookService from "./selectedBookService";

const initialState: SharedTypes.ISelectedBookState = {
  authorsBook: [],
  bookDetails: null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//Get all books by author
export const getAllBooksByAuthor = createAsyncThunk(
  "/selectedBook/getAllBooksByAuthor",
  async (author: string, thunkAPI) => {
    try {
      return await selectedBookService.getAllBooksByAuthor(author);
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

//Get all books by author
export const getBookDetails = createAsyncThunk(
  "/selectedBook/getBookDetails",
  async (bookTitle: string, thunkAPI) => {
    try {
      return await selectedBookService.getBookDetails(bookTitle);
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

export const selectedBookSlice = createSlice({
  name: "selectedBook",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(getAllBooksByAuthor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllBooksByAuthor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.authorsBook = action.payload;
      })
      .addCase(getAllBooksByAuthor.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload as string;
      })
      .addCase(getBookDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.bookDetails = action.payload;
      })
      .addCase(getBookDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = selectedBookSlice.actions;
export default selectedBookSlice.reducer;
