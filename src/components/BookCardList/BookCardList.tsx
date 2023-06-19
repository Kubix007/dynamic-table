import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import BookCard from "../BookCard/BookCard";
import Pagination from "../Pagination";
import { useState } from "react";
import * as Styles from "./BookCardList.styles";

const BookCardList = () => {
  const { authorsBook, bookDetails } = useSelector(
    (state: RootState) => state.selectedBook
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(4);
  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBooks = authorsBook.slice(firstBookIndex, lastBookIndex);

  return (
    <Styles.Container>
      <Styles.GridContainer container direction="row">
        {currentBooks
          .filter((item) => item.title !== bookDetails?.title)
          .map((item) => (
            <BookCard
              key={item.title}
              author={item.author}
              title={item.title}
              image={item.simple_thumb}
              kind={item.kind}
              genre={item.genre}
            />
          ))}
      </Styles.GridContainer>
      <Pagination
        totalBooks={authorsBook.length - 1}
        booksPerPage={booksPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Styles.Container>
  );
};

export default BookCardList;
