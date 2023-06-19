import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import DynamicTable from "../../components/DynamicTable";
import * as Styles from "./BookGenres.styles";
import { getAllBooksByGenre } from "../../features/books/bookSlice";
import { useEffect } from "react";
import { setGenre } from "../../features/filters/filterSlice";

const BookGenres = () => {
  const dispatch: AppDispatch = useDispatch();
  const { books } = useSelector((state: RootState) => state.book);
  const currentURL = window.location.href;
  const lastSegment = currentURL.substring(currentURL.lastIndexOf("/") + 1);

  useEffect(() => {
    dispatch(getAllBooksByGenre(lastSegment));
    dispatch(setGenre(lastSegment));
  }, [dispatch, lastSegment]);

  return (
    <Styles.Container>
      <DynamicTable data={books} />
    </Styles.Container>
  );
};

export default BookGenres;
