/// <reference types="cypress" />

describe("Dymanic Dropdown",() =>{

    it("testcase1",() =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#autocomplete").type("Ind");

        cy.get(".ui-menu-item div").each(($el,index,$list) =>{
        
            {
                $el.text()==="India";
                $el.click();
               
        }
    })
    })

})