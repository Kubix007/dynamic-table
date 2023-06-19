import { Link, Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { Button } from "@mui/material";
import { useEffect } from "react";
import {
  getAllBooksByAuthor,
  getBookDetails,
  reset,
} from "../../features/selectedBook/selectedBookSlice";
import BookCardList from "../../components/BookCardList";
import { remove } from "diacritics";
import { CircularProgress } from "@mui/material";
import * as Styles from "./BooksDetails.styles";

const BooksDetails = () => {
  const { author, title, genre, kind } = useParams();
  const { isLoading: isLoadingBooks, isError: isErrorLoadingBooks } =
    useSelector((state: RootState) => state.book);
  const formatedTitle = remove(
    title!
      .toLocaleLowerCase()
      .replaceAll("(", "")
      .replaceAll(")", "")
      .replaceAll("!", "")
      .replaceAll(".", "")
  );
  const dispatch: AppDispatch = useDispatch();
  const formatedAuthor = remove(
    author!
      .replaceAll(" ", "-")
      .replaceAll("(", "")
      .replaceAll(")", "")
      .toLocaleLowerCase()
  );
  const { bookDetails, isLoading, isError } = useSelector(
    (state: RootState) => state.selectedBook
  );

  useEffect(() => {
    dispatch(getAllBooksByAuthor(formatedAuthor));
    dispatch(getBookDetails(formatedTitle));

    return () => {
      dispatch(reset());
    };
  }, [author, dispatch, formatedAuthor, formatedTitle]);

  if (isLoadingBooks || isLoading) {
    return <CircularProgress />;
  } else if (isError || isErrorLoadingBooks) {
    return <Navigate to="/blad" />;
  } else {
    return (
      <Styles.BooksDetailsContainer container direction="row">
        <Styles.BookImage item>
          {bookDetails ? (
            <img src={bookDetails.simple_thumb} alt={bookDetails.title} />
          ) : (
            <Styles.NoImageError />
          )}
          <Styles.BookInfoBottom>
            <Styles.BookGenre>Gatunek: {genre}</Styles.BookGenre>
            <Styles.BookKind>Rodzaj: {kind}</Styles.BookKind>
          </Styles.BookInfoBottom>
        </Styles.BookImage>
        <Styles.BookDetails item>
          <Styles.BookDetails container direction="column">
            <Styles.BookInfoTop item>
              {bookDetails ? (
                <Styles.BookTitle>{bookDetails.title}</Styles.BookTitle>
              ) : null}
              {bookDetails ? (
                <Styles.BookAuthor>
                  {bookDetails.authors[0].name}
                </Styles.BookAuthor>
              ) : null}
            </Styles.BookInfoTop>
            <Styles.BookButtonContainer item>
              {bookDetails && bookDetails.pdf ? (
                <Link to={bookDetails.pdf} target="_blank">
                  <Button variant="contained">Pobierz książkę</Button>
                </Link>
              ) : (
                <Button variant="contained" disabled>
                  Książka niedostępna
                </Button>
              )}
            </Styles.BookButtonContainer>
            <Styles.OtherBooks item>
              <Styles.OtherBooksInfo>
                Pozostałe książki autora:
              </Styles.OtherBooksInfo>
              {isLoading ? <CircularProgress /> : <BookCardList />}
            </Styles.OtherBooks>
          </Styles.BookDetails>
        </Styles.BookDetails>
      </Styles.BooksDetailsContainer>
    );
  }
};

export default BooksDetails;
