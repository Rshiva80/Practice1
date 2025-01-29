/// <reference types="cypress" />
describe("session 20 and 21", () => {
  it("using alias", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('[class="search-keyword"]').type("ca");
    cy.get('[type = "submit"]').click();

    // using alias
    cy.get(".products").as("productLocator");
    cy.get("@productLocator").find(".product").should("have.length", 4);
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const testVeg = $el.find("h4.product-name").text();

        if (testVeg.includes("Cashews")) {
          $el.find("button").click();
        }
      });

    cy.get(".brand").should("have.text", "GREENKART");
    cy.get(".cart-icon").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });

  it.skip("Visible and invisible elements using Assertions in Cypress ", () => {
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
     cy.get("#hide-textbox").click();
     cy.get("#displayed-text").should("not.be.visible");
     cy.get("#show-textbox").click();
     cy.get("#displayed-text").should("be.visible");


  });

});
