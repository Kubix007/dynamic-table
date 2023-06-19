describe("DEFAULT TABLE LOADING TEST", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Jules Gabriel Verne's book is visible", () => {
    cy.wait(2000);
    const tableElements = cy.get('[data-testid="dynamic-table-col"]');
    tableElements.contains("Jules Gabriel Verne");
  });

  it("Ignacy Krasicki's book is visible", () => {
    cy.wait(2000);
    const tableElements = cy.get('[data-testid="dynamic-table-col"]');
    tableElements.contains("Ignacy Krasicki");
  });

  it("Tristan Derème's book is visible", () => {
    cy.wait(2000);
    const tableElements = cy.get('[data-testid="dynamic-table-col"]');
    tableElements.contains("Tristan Derème");
  });
});

describe("DEFAULT BREADCRUMB LOADING TEST", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Breadcrumb 'Książki' is visible", () => {
    cy.wait(2000);
    const tableElements = cy.get('[data-testid="breadcrumb-testid"]');
    tableElements.contains("Książki");
  });
});

describe("PAGINATION TEST", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Page 2 - Maria Konopnicka's book is visible", () => {
    cy.wait(2000);
    const paginationButton = cy.get(".rc-pagination-item-2");
    paginationButton.click();
    const tableElements = cy.get('[data-testid="dynamic-table-col"]');
    tableElements.contains("Maria Konopnicka");
  });

  it("Page 2 - Autor nieznany's book is visible", () => {
    cy.wait(2000);
    const paginationButton = cy.get(".rc-pagination-item-2");
    paginationButton.click();
    const tableElements = cy.get('[data-testid="dynamic-table-col"]');
    tableElements.contains("Autor nieznany");
  });

  it("Page 2 - Jan Sten's book is visible", () => {
    cy.wait(2000);
    const paginationButton = cy.get(".rc-pagination-item-2");
    paginationButton.click();
    const tableElements = cy.get('[data-testid="dynamic-table-col"]');
    tableElements.contains("Jan Sten");
  });

  it("Page 3 - Horacy's book is visible", () => {
    cy.wait(2000);
    const paginationButton = cy.get(".rc-pagination-item-3");
    paginationButton.click();
    const tableElements = cy.get('[data-testid="dynamic-table-col"]');
    tableElements.contains("Horacy");
  });

  it("Page 3 - Stanisław Jachowicz's book is visible", () => {
    cy.wait(2000);
    const paginationButton = cy.get(".rc-pagination-item-3");
    paginationButton.click();
    const tableElements = cy.get('[data-testid="dynamic-table-col"]');
    tableElements.contains("Stanisław Jachowicz");
  });
});

// describe("CURRENCY RATE SHOULD CHANGE SUCCESSFULLY", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000");
//   });

//   it("Send currency should be changed", () => {
//     const sendValue = "EUR";
//     cy.get('[data-testid="toSendButton"]').click();
//     cy.get('[data-testid="autocompleteTextField"]').type(`${sendValue}{enter}`);
//     cy.get('[data-testid="sendCurrencyCode"]').contains(sendValue);
//   });

//   it("Receive currency should be changed", () => {
//     const sendValue = "ALL";
//     cy.get('[data-testid="toReceiveButton"]').click();
//     cy.get('[data-testid="autocompleteTextField"]').type(`${sendValue}{enter}`);
//     cy.get('[data-testid="receiveCurrencyCode"]').contains(sendValue);
//   });
// });

// describe("COUNTRY FLAG SHOULD CHANGE SUCCESSFULLY", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000");
//   });

//   it("Send country flag should be changed", () => {
//     const sendValue = "EUR";
//     cy.get('[data-testid="toReceiveButton"]').click();
//     cy.get('[data-testid="autocompleteTextField"]').type(`${sendValue}{enter}`);
//     cy.get(
//       `[data-testid="${sendValue.slice(0, 2).toLocaleLowerCase()}"]`
//     ).should("be.visible");
//   });

//   it("Receive country flag should be changed", () => {
//     const sendValue = "ALL";
//     cy.get('[data-testid="toReceiveButton"]').click();
//     cy.get('[data-testid="autocompleteTextField"]').type(`${sendValue}{enter}`);
//     cy.get(
//       `[data-testid="${sendValue.slice(0, 2).toLocaleLowerCase()}"]`
//     ).should("be.visible");
//   });
// });

// describe("DIFFERENT CURRENCY CONVERSION TEST", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000");
//   });

//   it("Conversion from EURO to USD", () => {
//     const sendValue = "10";
//     const sendAutoCompleteValue = "EUR";
//     const receiveAutoCompleteValue = "USD";
//     let sendConversionRate = 0;
//     cy.get('[data-testid="toSendButton"]').click();
//     cy.get('[data-testid="autocompleteTextField"]').type(
//       `${sendAutoCompleteValue}{enter}`
//     );
//     cy.get('[data-testid="toReceiveButton"]').click();
//     cy.get('[data-testid="autocompleteTextField"]').type(
//       `${receiveAutoCompleteValue}{enter}`
//     );
//     cy.wait(2000);
//     cy.get("#sendTextField").type(sendValue);
//     cy.wait(2000);
//     cy.get('[data-testid="receiveConversionRate"]').then(($span) => {
//       // $span is the object that the previous command yielded
//       sendConversionRate = $span.text();

//       cy.get("#receiveTextField").should(
//         "have.value",
//         (sendValue * sendConversionRate).toPrecision(3)
//       );
//     });
//   });

//   it("Conversion from USD to EURO", () => {
//     const receiveValue = "15";
//     const sendAutoCompleteValue = "USD";
//     const receiveAutoCompleteValue = "EUR";
//     let receiveConversionRate = 0;
//     cy.get('[data-testid="toSendButton"]').click();
//     cy.get('[data-testid="autocompleteTextField"]').type(
//       `${sendAutoCompleteValue}{enter}`
//     );
//     cy.get('[data-testid="toReceiveButton"]').click();
//     cy.get('[data-testid="autocompleteTextField"]').type(
//       `${receiveAutoCompleteValue}{enter}`
//     );
//     cy.wait(2000);
//     cy.get("#sendTextField").type(receiveValue);
//     cy.wait(2000);
//     cy.get('[data-testid="receiveConversionRate"]').then(($span) => {
//       // $span is the object that the previous command yielded
//       receiveConversionRate = $span.text();

//       cy.get("#receiveTextField").should(
//         "have.value",
//         (receiveValue * receiveConversionRate).toPrecision(3)
//       );
//     });
//   });
// });
