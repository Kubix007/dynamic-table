import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import DynamicTable from "../../components/DynamicTable";
import * as Styles from "./Books.styles";
import { getAllBooks } from "../../features/books/bookSlice";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router-dom";

const Books = () => {
  const dispatch: AppDispatch = useDispatch();
  const { books, isLoading, isError } = useSelector(
    (state: RootState) => state.book
  );

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

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

export default Books;
