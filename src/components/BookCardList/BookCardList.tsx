import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import BookCard from "../BookCard/BookCard";
import Pagination from "../Pagination";
import { useEffect, useState } from "react";
import * as Styles from "./BookCardList.styles";

const BookCardList = () => {
  const { authorsBook, bookDetails } = useSelector(
    (state: RootState) => state.selectedBook
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBookPerPage] = useState(4);
  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBooks = authorsBook.slice(firstBookIndex, lastBookIndex);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    console.log("Szerokość", screenWidth);

    if (screenWidth <= 593) {
      setBookPerPage(2);
    } else if (screenWidth > 593 && screenWidth <= 1070) {
      setBookPerPage(3);
    } else {
      setBookPerPage(4);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

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
