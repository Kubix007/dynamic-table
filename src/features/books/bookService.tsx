import axios from "axios";

const getAllBooks = async () => {
  const response = await axios.get(`https://wolnelektury.pl/api/books/`);

  return response.data;
};

const getAllBooksByGenre = async (genre: string) => {
  const response = await axios.get(
    `https://wolnelektury.pl/api/genres/${genre}/books/`
  );

  return response.data;
};

const bookService = {
  getAllBooks,
  getAllBooksByGenre,
};

export default bookService;
