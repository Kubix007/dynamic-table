import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import BookCard from "../BookCard/BookCard";
import { useParams } from "react-router-dom";
import * as Styles from "./BookCardList.styles";
import Pagination from "../Pagination";
import { useState } from "react";

const BookCardList = () => {
  const { authorsBook } = useSelector((state: RootState) => state.selectedBook);
  const { title } = useParams();

  const [currentPage, setCurrentPage] = useState(2);
  const [booksPerPage, setBooksPerPage] = useState(3);
  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBooks = authorsBook.slice(firstBookIndex, lastBookIndex);

  return (
    <div>
      <Styles.GridContainer container direction="column">
        {currentBooks
          .filter((item) => item.title !== title)
          .map((item) => (
            <BookCard
              key={item.title}
              author={item.author}
              title={item.title}
              image={item.simple_thumb}
            />
          ))}
      </Styles.GridContainer>
      <Pagination
        totalBooks={authorsBook.length}
        booksPerPage={booksPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default BookCardList;
