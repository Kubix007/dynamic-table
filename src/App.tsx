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
import { bookGenresData, bookKindsData } from "./data/BooksData";
import * as Styles from "./App.styles";
import BookKinds from "./pages/BookKinds";

function App() {
  return (
    <Styles.Container>
      <Router>
        <Styles.HeaderPaper className="paper-header">
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
              path="/ksiazki/:kind/:genre/:author/:title"
              element={<BooksDetails />}
            />
            {bookKindsData.map((kind) => (
              <Route
                key={kind.href}
                path={`/ksiazki/${kind.slug}`}
                element={<BookKinds />}
              />
            ))}
            {bookKindsData.map((kind) => {
              return bookGenresData.map((genre) => (
                <Route
                  key={genre.href}
                  path={`/ksiazki/${kind.slug}/${genre.slug}`}
                  element={<BookGenres />}
                />
              ));
            })}
          </Routes>
        </Styles.ContentPaper>
      </Router>
    </Styles.Container>
  );
}

export default App;
