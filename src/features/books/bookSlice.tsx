import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as SharedTypes from "../../shared/types";
import bookService from "./bookService";
import axios from "axios";

const initialState: SharedTypes.IBookState = {
  books: {
    kind: "",
    totalItems: 0,
    items: [],
  },
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

//Get currency
export const getBooks = createAsyncThunk(
  "/book/getBooks",
  async (data: any, thunkAPI) => {
    try {
      return await bookService.getBooks(data);
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
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload as string;
      });
  },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
