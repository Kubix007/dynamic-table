import axios from "axios";

const API_KEY = "AIzaSyB7cAN8zsi4XztqhCWW7QfMRIphiuiexgA";

const getBooks = async (data: any) => {
  const config = {
    params: {
      key: API_KEY,
    },
  };

  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=/`,
    config
  );

  return response.data;
};

const bookService = {
  getBooks,
};

export default bookService;
