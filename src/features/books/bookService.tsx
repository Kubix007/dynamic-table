import axios from "axios";

const getAllBooks = async () => {
  const response = await axios.get(`https://wolnelektury.pl/api/books/`);

  return response.data;
};

const bookService = {
  getAllBooks,
};

export default bookService;
