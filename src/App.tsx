import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Books from "./pages/Books";
import BooksDetails from "./pages/BookDetails";
import BookGenres from "./pages/BookGenres";
import Breadcrumbs from "./components/Breadcrumbs";
import NoMatch from "./pages/NoMatch";
import { bookGenresData } from "./data/BooksData";
import * as Styles from "./App.styles";

function App() {
  return (
    <Styles.Container>
      <Router>
        <Styles.HeaderPaper>
          <header className="App-header">
            <Breadcrumbs />
          </header>
        </Styles.HeaderPaper>
        <Styles.ContentPaper elevation={10}>
          <Routes>
            <Route path="*" element={<NoMatch />} />
            <Route path="/" element={<Navigate to="/ksiazki" />} />
            <Route path="/ksiazki" element={<Books />} />
            <Route
              path="/ksiazki/:genre/:kind/:author/:title"
              element={<BooksDetails />}
            />
            {bookGenresData.map((item) => (
              <Route
                key={item.href}
                path={`/ksiazki/${item.slug}`}
                element={<BookGenres />}
              />
            ))}
          </Routes>
        </Styles.ContentPaper>
      </Router>
    </Styles.Container>
  );
}

export default App;
