/// <reference types="cypress" />
describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('[class="search-keyword"]').type("ca");
    cy.get('[type = "submit"]').click();

    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const testVeg = $el.find("h4.product-name").text();

        if (testVeg.includes("Cashews")) {
          $el.find("button").click();
        }
      });
  });
});
