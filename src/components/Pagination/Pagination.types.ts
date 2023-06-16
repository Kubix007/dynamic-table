export interface IProps {
  totalBooks: number;
  booksPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}
