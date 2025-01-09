
import HomePage from '../../../support/pageObjects/homePage'

describe("test the page without POM",()=>{
 
    // // it("test case1 without POM",()=>{
    // //     cy.visit("https://rahulshettyacademy.com/angularpractice/");
    // //     //cy.get("form input[name='name']").type("Test Name");
    // //     cy.get("input[name='name']:nth-child(2)").type("Test Name");
    // //     cy.get("form input[name='email']").type("TestN@test.com");
    // //     cy.get('[placeholder="Password"]').type("PWD");
    // //     cy.get("#exampleCheck1").check();
    // //     cy.get("select").select("Female");
    // })



    it("test case1 with  POM",()=>{

        const Page = new HomePage();

        cy.visit("https://rahulshettyacademy.com/angularpractice/");
        
        Page.getName() .type("Test Name");
        Page.emailAdd().type("TestN@test.com");
        Page.getPassword().type("PWD");
        Page.getcheckbox1().check();
       Page. getGender().select("Female");
    })

})
    