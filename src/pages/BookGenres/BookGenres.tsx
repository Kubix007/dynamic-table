import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import DynamicTable from "../../components/DynamicTable";
import * as Styles from "./BookGenres.styles";
import { getAllBooksByGenre } from "../../features/books/bookSlice";
import { useEffect } from "react";
import { setGenre } from "../../features/filters/filterSlice";
import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";

const BookGenres = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentURL = window.location.href;
  const lastSegment = currentURL.substring(currentURL.lastIndexOf("/") + 1);
  const { books, isLoading, isError } = useSelector(
    (state: RootState) => state.book
  );

  useEffect(() => {
    dispatch(getAllBooksByGenre(lastSegment));
    dispatch(setGenre(lastSegment));
  }, [dispatch, lastSegment]);

  if (isLoading) {
    return <CircularProgress />;
  } else if (isError) {
    return <Navigate to="/blad" />;
  } else {
    return (
      <Styles.Container>
        <DynamicTable data={books} />
      </Styles.Container>
    );
  }
};

export default BookGenres;
