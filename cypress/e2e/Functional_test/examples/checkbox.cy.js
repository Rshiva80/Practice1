/// <reference types="cypress" />
describe("This is test suite to test checkboxes and radioButtom", () => {

    it("First checkbox test case", () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1"); // asertion  //checks the checkbox
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

        // select multiple check boxes
        cy.get("input[type='checkbox']").check();

        // select 2 of threee checkbox
        cy.get("input[type='checkbox']").check(["option2","option3"]);
        
    })

    it("Radio Button test case", () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("input[value='radio1']").check().should("be.checked");
    });

});


