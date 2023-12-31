import BookIcon from "../BookIcon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Pagination from "../Pagination";
import { setGenre, setKind } from "../../features/filters/filterSlice";
import { AppDispatch } from "../../app/store";
import { useDispatch } from "react-redux";
import { remove } from "diacritics";
import * as Styles from "./DynamicTable.styles";
import * as SharedTypes from "./../../shared/types";
import * as Types from "./DynamicTable.types";

const DynamicTable = ({ data }: Types.IProps) => {
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(3);
  const lastBookIndex = currentPage * booksPerPage;
  const firstBookIndex = lastBookIndex - booksPerPage;
  const currentBooks = data.slice(firstBookIndex, lastBookIndex);
  const dispatch: AppDispatch = useDispatch();

  const handleClick = (book: SharedTypes.IBook) => {
    navigate(
      `/ksiazki/${remove(
        book.kind.replaceAll(" ", "-").toLowerCase()
      )}/${remove(
        book.genre.split(", ")[0].replaceAll(" ", "-").toLowerCase()
      )}/${remove(book.author.replaceAll(" ", "-").toLowerCase())}/${remove(
        book.title
          .replaceAll(" ", "-")
          .toLocaleLowerCase()
          .replaceAll("(", "")
          .replaceAll(")", "")
          .replaceAll("!", "")
          .replaceAll(".", "")
      )}`
    );
    dispatch(
      setGenre(book.genre.split(", ")[0].replaceAll(" ", "-").toLowerCase())
    );
    dispatch(setKind(book.kind.replaceAll(" ", "-").toLowerCase()));
  };

  const TableBody = () => {
    return currentBooks.map((book) => {
      return (
        <Styles.TableRow
          data-testid="dynamic-table-col"
          key={book.url}
          onClick={() => handleClick(book)}
        >
          <Styles.TableColumn1
            data-testid="dynamic-table-col-img"
            className="col-1"
          >
            <BookIcon src={book.simple_thumb} alt={book.title} />
          </Styles.TableColumn1>
          <Styles.TableColumn2
            data-testid="dynamic-table-col-title"
            className="col-2"
            data-label="Tytuł"
          >
            {book.title}
          </Styles.TableColumn2>
          <Styles.TableColumn3
            data-testid="dynamic-table-col-author"
            className="col-3"
            data-label="Autor"
          >
            {book.author}
          </Styles.TableColumn3>
          <Styles.TableColumn4
            data-testid="dynamic-table-col-kind"
            className="col-4"
            data-label="Rodzaj"
          >
            {book.kind}
          </Styles.TableColumn4>
          <Styles.TableColumn5
            data-testid="dynamic-table-col-genre"
            className="col-5"
            data-label="Gatunek"
          >
            {book.genre.split(", ")[0]}
          </Styles.TableColumn5>
        </Styles.TableRow>
      );
    });
  };

  return (
    <div>
      <Styles.ResponsiveTable data-testid="dynamic-table">
        <Styles.TableHeader className="table-header">
          <Styles.TableColumn1 className="col-1"></Styles.TableColumn1>
          <Styles.TableColumn2 className="col-2">Tytuł</Styles.TableColumn2>
          <Styles.TableColumn3 className="col-3">Autor</Styles.TableColumn3>
          <Styles.TableColumn4 className="col-4">Rodzaj</Styles.TableColumn4>
          <Styles.TableColumn5 className="col-5">Gatunek</Styles.TableColumn5>
        </Styles.TableHeader>
        {TableBody()}
      </Styles.ResponsiveTable>
      <Pagination
        booksPerPage={booksPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalBooks={data.length}
      />
    </div>
  );
};

export default DynamicTable;
