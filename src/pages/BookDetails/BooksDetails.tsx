import { Link, useParams } from "react-router-dom";
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
  const { genre, kind, author, title } = useParams();
  const { books } = useSelector((state: RootState) => state.book);
  const selectedBook = books.filter((item) => item.title === title)[0];
  const formatedTitle = remove(title!.replaceAll(" ", "-").toLocaleLowerCase());
  const dispatch: AppDispatch = useDispatch();
  const formatedAuthor = remove(
    author!
      .replaceAll(" ", "-")
      .replaceAll("(", "")
      .replaceAll(")", "")
      .toLocaleLowerCase()
  );
  const { bookDetails, isLoading } = useSelector(
    (state: RootState) => state.selectedBook
  );

  useEffect(() => {
    dispatch(getAllBooksByAuthor(formatedAuthor));
    dispatch(getBookDetails(formatedTitle));

    return () => {
      dispatch(reset());
    };
  }, [author, dispatch, formatedAuthor, formatedTitle]);

  return (
    <Styles.BooksDetailsContainer container direction="row">
      <Styles.BookImage item>
        {selectedBook ? (
          <img src={selectedBook.simple_thumb} alt={selectedBook.title} />
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
            <Styles.BookTitle>{title}</Styles.BookTitle>
            <Styles.BookAuthor>{author}</Styles.BookAuthor>
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
              {isLoading ? <CircularProgress /> : <BookCardList />}
            </Styles.OtherBooksInfo>
          </Styles.OtherBooks>
        </Styles.BookDetails>
      </Styles.BookDetails>
    </Styles.BooksDetailsContainer>
  );
};

export default BooksDetails;
