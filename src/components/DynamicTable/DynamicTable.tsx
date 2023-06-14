import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import BookIcon from "../BookIcon";
import * as Styles from "./DynamicTable.styles";
import * as SharedStyles from "./../../shared/types";
import { useNavigate } from "react-router-dom";

const DynamicTable = () => {
  const { books } = useSelector((state: RootState) => state.book);
  let navigate = useNavigate();

  const handleClick = (book: SharedStyles.IBook) => {
    navigate(
      `/ksiazki/${book.genre}/${book.kind}/${book.author}/${book.title}`
    );
  };

  const TableBody = () => {
    return books.map((book) => {
      return (
        <Styles.TableRow key={book.url} onClick={() => handleClick(book)}>
          <Styles.TableColumn1 className="col-1">
            <BookIcon src={book.simple_thumb} alt={book.title} />
          </Styles.TableColumn1>
          <Styles.TableColumn2 className="col-2" data-label="Tytuł">
            {book.title}
          </Styles.TableColumn2>
          <Styles.TableColumn3 className="col-3" data-label="Autor">
            {book.author}
          </Styles.TableColumn3>
          <Styles.TableColumn4 className="col-4" data-label="Gatunek">
            {book.genre}
          </Styles.TableColumn4>
          <Styles.TableColumn5 className="col-5" data-label="Rodzaj">
            {book.kind}
          </Styles.TableColumn5>
        </Styles.TableRow>
      );
    });
  };

  return (
    <Styles.ResponsiveTable>
      <Styles.TableHeader className="table-header">
        <Styles.TableColumn1 className="col-1"></Styles.TableColumn1>
        <Styles.TableColumn2 className="col-2">Tytuł</Styles.TableColumn2>
        <Styles.TableColumn3 className="col-3">Autor</Styles.TableColumn3>
        <Styles.TableColumn4 className="col-4">Gatunek</Styles.TableColumn4>
        <Styles.TableColumn5 className="col-5">Rodzaj</Styles.TableColumn5>
      </Styles.TableHeader>
      {TableBody()}
    </Styles.ResponsiveTable>
  );
};

export default DynamicTable;
