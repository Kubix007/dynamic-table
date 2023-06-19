import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import DynamicTable from "../../components/DynamicTable";
import * as Styles from "./BookKinds.styles";
import { useEffect } from "react";
import { setKind } from "../../features/filters/filterSlice";
import { setGenre } from "../../features/filters/filterSlice";
import { getAllBooksByGenreAndKind } from "../../features/books/bookSlice";
import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";

const BookKinds = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentURL = window.location.href;
  const segments = currentURL.split("/");
  const lastTwoSegments = segments.slice(-2);
  const { books, isLoading, isError } = useSelector(
    (state: RootState) => state.book
  );

  useEffect(() => {
    dispatch(
      getAllBooksByGenreAndKind({
        genre: lastTwoSegments[0],
        kind: lastTwoSegments[1],
      })
    );
    dispatch(setKind(lastTwoSegments[1]));
    dispatch(setGenre(lastTwoSegments[0]));
  }, [dispatch, lastTwoSegments]);

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

export default BookKinds;
