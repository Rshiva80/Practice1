/// <reference types="cypress" />

describe("Dymanic Dropdown",() =>{

    it("testcase1",() =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       // cy.get('#opentab').invoke("removeAttr","target");
     
        cy.get("#autocomplete").type("India");
       

        cy.get(".ui-menu-item").each(($el,index,$list) =>{
            if($el.text() === "India"){
                cy.wrap($el).click();
                 
            }
            cy.get('#autocomplete').should("have.value","India");
        })
        })
        

        })