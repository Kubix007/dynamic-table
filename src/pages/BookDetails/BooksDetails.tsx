import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Button } from "@mui/material";
import * as Styles from "./BooksDetails.styles";

const BooksDetails = () => {
  const { genre, kind, author, title } = useParams();
  const { books } = useSelector((state: RootState) => state.book);
  const bookDetails = books.filter((item) => item.title === title)[0];

  return (
    <Styles.BooksDetailsContainer container direction="row">
      <Styles.BookImage item>
        <img src={bookDetails.simple_thumb} alt={bookDetails.title} />
      </Styles.BookImage>
      <Styles.BookDetails item>
        <Styles.BookDetails container direction="column" spacing={5}>
          <Styles.BookInfoTop item>
            <Styles.BookTitle>{title}</Styles.BookTitle>
            <Styles.BookAuthor>{author}</Styles.BookAuthor>
          </Styles.BookInfoTop>
          <Styles.BookInfoBottom item>
            <Styles.BookGenre>Gatunek: {genre}</Styles.BookGenre>
            <Styles.BookKind>Rodzaj: {kind}</Styles.BookKind>
          </Styles.BookInfoBottom>
          <Styles.BookButtonContainer item>
            <Button variant="contained">Pobierz książkę</Button>
          </Styles.BookButtonContainer>
          <Styles.OtherBooks item>abc</Styles.OtherBooks>
        </Styles.BookDetails>
      </Styles.BookDetails>
    </Styles.BooksDetailsContainer>
  );
};

export default BooksDetails;
