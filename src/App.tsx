import { useEffect } from "react";
import { AppDispatch } from "./app/store";
import { useDispatch } from "react-redux";
import { getAllBooks } from "./features/books/bookSlice";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Books from "./pages/Books";
import BooksDetails from "./pages/BookDetails";
import * as Styles from "./App.styles";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <Styles.Container>
      <header className="App-header"></header>
      <Styles.PaperLayout elevation={10}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/ksiazki" />} />
            <Route path="/ksiazki" element={<Books />} />
            <Route
              path="/ksiazki/:genre/:kind/:author/:title"
              element={<BooksDetails />}
            />
          </Routes>
        </Router>
      </Styles.PaperLayout>
    </Styles.Container>
  );
}

export default App;
