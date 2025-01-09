/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe("Iframe testing",() =>{

    it("First Test Case",()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded("#courses-iframe");

        cy.iframe().find('a[href="mentorship"]').eq(0).click();
        cy.iframe().find("h1['.pricing-title text-white ls-1']").should("have.text","BRONZE");
    })

})
