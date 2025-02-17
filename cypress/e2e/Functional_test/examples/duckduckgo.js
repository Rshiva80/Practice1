import {Given, When,Then } from "@badeball/cypress-cucumber-preprocessor";

When("Go to Landing Page" , () =>{
    cy.visit("https://www.duckduckgo.com");
});

    Then("Search box should be visible",()=>
    {
        cy.get('[name="q"]').should("be.visible");
        cy.get("input").should(
            "have.attr",
            "placeholder",
            "Search the web without being tracked");
    })
 
