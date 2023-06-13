import { useParams } from "react-router-dom";
import * as Styles from "./BooksDetails.styles";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const BooksDetails = () => {
  const { genre, kind, author, title } = useParams();
  const { books } = useSelector((state: RootState) => state.book);
  const bookDetails = books.filter((item) => item.title === title)[0];

  return (
    <Styles.Container>
      BooksDetails: Gatunek: {genre} Rodzaj: {kind} Autor: {author} Tytuł:
      {title}
      <img src={bookDetails.simple_thumb} alt="" />
    </Styles.Container>
  );
};

export default BooksDetails;
