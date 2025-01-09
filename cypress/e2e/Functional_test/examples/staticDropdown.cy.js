/// <reference types="cypress" />

describe("Test static dropdown", () => {

    it("Test First dropdown",() => {

     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
     cy.get("select").select("Option1").should("have.value","option1")
    })


})
