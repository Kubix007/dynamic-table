import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import DynamicTable from "../../components/DynamicTable";
import * as Styles from "./BookKinds.styles";
import { useEffect } from "react";
import { setKind } from "../../features/filters/filterSlice";
import { getAllBooksByKind } from "../../features/books/bookSlice";
import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";

const BookKinds = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentURL = window.location.href;
  const lastSegment = currentURL.substring(currentURL.lastIndexOf("/") + 1);
  const { books, isLoading, isError } = useSelector(
    (state: RootState) => state.book
  );

  useEffect(() => {
    dispatch(getAllBooksByKind(lastSegment));
    dispatch(setKind(lastSegment));
  }, [dispatch, lastSegment]);

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

export default BookKinds;
