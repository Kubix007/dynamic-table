import axios from "axios";

const getAllBooksByAuthor = async (author: string) => {
  const response = await axios.get(
    `https://wolnelektury.pl/api/authors/${author}/books/`
  );

  return response.data;
};

const getBookDetails = async (bookTitle: string) => {
  const response = await axios.get(
    `https://wolnelektury.pl/api/books/${bookTitle}/`
  );

  return response.data;
};

const selectedBookService = {
  getAllBooksByAuthor,
  getBookDetails,
};

export default selectedBookService;
