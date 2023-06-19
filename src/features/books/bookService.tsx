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

const getAllBooksByGenreAndKind = async (genre: string, kind: string) => {
  const response = await axios.get(
    `https://wolnelektury.pl/api/genres/${genre}/kinds/${kind}/books/`
  );

  return response.data;
};

const bookService = {
  getAllBooks,
  getAllBooksByGenre,
  getAllBooksByGenreAndKind,
};

export default bookService;
