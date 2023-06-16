import * as Types from "./Pagination.types";
import * as Styles from "./Pagination.styles";
import RcPagination from "rc-pagination";

const Pagination = ({
  totalBooks,
  booksPerPage,
  setCurrentPage,
  currentPage,
}: Types.IProps) => {
  const pageCount = Math.ceil(totalBooks / booksPerPage);

  const onChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <Styles.Container>
      <RcPagination
        onChange={onChange}
        current={currentPage}
        total={pageCount}
        showLessItems
        style={{ marginBottom: "2rem" }}
      />
    </Styles.Container>
  );
};

export default Pagination;
