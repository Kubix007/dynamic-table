import { createSlice } from "@reduxjs/toolkit";
import * as SharedTypes from "../../shared/types";

const initialState: SharedTypes.IFilterState = {
  filters: {
    genre: "",
    kind: "",
    title: "",
    author: "",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    reset: (state) => initialState,
    setGenre: (state, action) => {
      state.filters.genre = action.payload;
    },
    setKind: (state, action) => {
      state.filters.kind = action.payload;
    },
  },
});

export const { reset, setGenre, setKind } = filterSlice.actions;
export default filterSlice.reducer;
