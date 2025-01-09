// Create POM page with E2E flow till checkout

import shopPage from "../../../support/pageObjects/shoppage";

describe("Test with E2E scenario",() => {


    it("Test the shop button", () =>{

        const buttonShop = new shopPage();

        cy.visit("https://rahulshettyacademy.com/angularpractice/shop");
        cy.get(':nth-child(1) > .card > .card-footer > .btn').click();
        buttonShop.checkOutBtn().click();
        cy.get(".btn.btn-success").click();
        cy.get("#country").type("India");
        cy.get('.suggestions > ul > li > a',{ timeout: 10000 }).click();
        cy.get("#checkbox2").check({force: true});
        cy.get("[type='submit']").click();
        cy.get("strong").contains("Success");


    })




})