/// <reference types="cypress" />

describe("Layout load", () => {
  beforeEach(() => cy.visit("http://localhost:3000/"));
  it("Should load the event detail", () => {
    cy.get('[data-testid="name-title"]')
      .should("exist")
      .should("contain", "Ondřej Hájek");
  });
});
