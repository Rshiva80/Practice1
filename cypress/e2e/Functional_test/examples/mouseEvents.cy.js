describe("MouseEvents",()=>{
    it("MouseOver",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get(".mouse-hover-content").invoke("show");
        cy.contains("Top").click();
        cy.url().should("include","top");
        // Show method should be applied to immediate Parent 
        // of the hidden element that is why we dodnot apply it to "id="mousehover"

        // using force: true

       // cy.contains("Top").click({force:true});

    })

});