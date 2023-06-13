import { useEffect } from "react";
import DynamicTable from "./components/DynamicTable";
import { AppDispatch } from "./app/store";
import { useDispatch } from "react-redux";
import { getAllBooks } from "./features/books/bookSlice";
import * as Styles from "./App.styles";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <Styles.Container>
      <header className="App-header"></header>
      <main>
        <DynamicTable />
      </main>
      <footer></footer>
    </Styles.Container>
  );
}

export default App;
