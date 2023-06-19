import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

const setup = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

test("Dynamic Table should be rendered", async () => {
  setup();
  await new Promise((r) => setTimeout(r, 1000));
  const dynamicTable = screen.getByTestId("dynamic-table");
  expect(dynamicTable).toBeInTheDocument();
});

test("Row of table should be rendered", async () => {
  setup();
  await new Promise((r) => setTimeout(r, 1000));
  const imageRow = screen.getAllByTestId("dynamic-table-col-img");
  const titleRow = screen.getAllByTestId("dynamic-table-col-title");
  const authorRow = screen.getAllByTestId("dynamic-table-col-author");
  const kindRow = screen.getAllByTestId("dynamic-table-col-kind");
  const genreRow = screen.getAllByTestId("dynamic-table-col-genre");

  expect(imageRow).toHaveLength(3);
  expect(titleRow).toHaveLength(3);
  expect(authorRow).toHaveLength(3);
  expect(kindRow).toHaveLength(3);
  expect(genreRow).toHaveLength(3);
});

test("Breadcrumbs should be rendered", async () => {
  setup();
  await new Promise((r) => setTimeout(r, 1000));
  const breadcrumbComponent = screen.getByTestId("breadcrumb-testid");
  expect(breadcrumbComponent).toBeInTheDocument();
});

test("Pagination should be rendered", async () => {
  setup();
  await new Promise((r) => setTimeout(r, 1000));
  const paginationComponent = screen.getByTestId("pagination-testid");
  expect(paginationComponent).toBeInTheDocument();
});
