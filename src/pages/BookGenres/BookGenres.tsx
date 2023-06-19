import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import DynamicTable from "../../components/DynamicTable";
import * as Styles from "./BookGenres.styles";
import { getAllBooksByGenreAndKind } from "../../features/books/bookSlice";
import { useEffect } from "react";
import { setGenre, setKind } from "../../features/filters/filterSlice";
import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";

const BookGenres = () => {
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
        genre: lastTwoSegments[1],
        kind: lastTwoSegments[0],
      })
    );
    dispatch(setKind(lastTwoSegments[0]));
    dispatch(setGenre(lastTwoSegments[1]));
  }, []);

  if (isLoading) {
    return (
      <Styles.LoadingContainer>
        <CircularProgress style={{ width: "100px", height: "100px" }} />
      </Styles.LoadingContainer>
    );
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
