describe("Child Tab " , () => {

    it("test removeAttribute", () =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#opentab").invoke("removeAttr","target").click();
        //cy.url().should('include', 'qaclickacademy');
        cy.url().should('include','qaclickacademy');
    })

        it("open Pop up without href", () => {
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
            cy.get("#opentab").then((newTab) => {
              const openTab = newTab.prop("href");
              cy.visit(openTab);
              // browser navigation - go back
              //cy.go("back");
            })
})
 
})