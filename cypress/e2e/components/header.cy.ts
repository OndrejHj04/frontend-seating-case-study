/// <reference types="cypress" />

describe("Headers tests", () => {
  const email = "frontend@nfctron.com";
  const password = "Nfctron2025";
  const userName = "Šimon Frontendista";

  beforeEach(() => cy.visit("http://localhost:3000/"));
  it("Should display all header elements", () => {
    cy.get('[data-testid="icon"]').should("exist");
    cy.get('[data-testid="name-title"]').should("exist");
    cy.contains("button", "Login or register").should("exist");
  });

  it("Should be able to log in", () => {
    cy.contains("button", "Login or register").click();
    cy.get("form").should("exist");
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get("form button").click();
    cy.get('[data-testid="user-container"]').should("contain", userName);
  });
});
