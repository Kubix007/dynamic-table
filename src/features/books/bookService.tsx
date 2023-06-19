import axios from "axios";

const getAllBooks = async () => {
  const response = await axios.get(`https://wolnelektury.pl/api/books/`);

  return response.data;
};

const getAllBooksByKind = async (kinds: string) => {
  const response = await axios.get(
    `https://wolnelektury.pl/api/kinds/${kinds}/books/`
  );

  return response.data;
};

const getAllBooksByGenreAndKind = async (genre: string, kind: string) => {
  const response = await axios.get(
    `https://wolnelektury.pl/api/kinds/${kind}/genres/${genre}/books/`
  );

  return response.data;
};

const bookService = {
  getAllBooks,
  getAllBooksByKind,
  getAllBooksByGenreAndKind,
};

export default bookService;
