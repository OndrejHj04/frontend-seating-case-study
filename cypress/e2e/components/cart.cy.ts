/// <reference types="cypress" />

describe("Cart tests", () => {
  const email = "frontend@nfctron.com";
  const password = "Nfctron2025";

  beforeEach(() => cy.visit("http://localhost:3000/"));
  it("Should add and remove tickets from cart", () => {
    const seatButton = cy.get('[data-testid="single-seat"]').eq(0);
    seatButton.click();

    const cartButton = cy.get('button[data-testid="cart-button"]');
    cartButton.click();

    const cartState = cy.get('[data-testid="cart-state"]');
    cartState.should("contain", "Total for 1 tickets");

    seatButton.click();
    cartButton.click();
    cy.get('[data-testid="cart-state"]').should(
      "contain",
      "Total for 0 tickets"
    );
  });

  it("Should order tickets", () => {
    const seatButton = cy.get('[data-testid="single-seat"]').eq(0);
    seatButton.click();

    const cartButton = cy.get('button[data-testid="cart-button"]');
    cartButton.click();

    cy.get('button[data-testid="checkout"]').click();
    cy.get("form").should("exist");
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get("form button").click();
    cy.get('button[data-testid="purchase"]').click();
    cy.get(".swal-title").should("contain", "Successful!");
  });
});
