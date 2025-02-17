

describe("test the alerts",() =>{

    // beforeEach(()=>{
    //     cy.visit("https://demoqa.com/alerts");

    // })

    it("test the Click Button to see alert" ,() => {
        cy.visit("https://demoqa.com/alerts");
        cy.get("#alertButton").click();
        cy.on("window:alert",str =>{
            expect(str).to.equal("You clicked a button");
        })

    })
    it("On button click, confirm box will appear-Confirm" ,() => {
        cy.visit("https://demoqa.com/alerts");
        cy.on("window:confirm",str=>{
            expect(str).to.equal("Do you confirm action?");
            cy.get("#confirmResult").contains("OK");

        })
    })
        it("On button click, confirm box will appear-Cancel" ,() => {
            cy.visit("https://demoqa.com/alerts");
            cy.on('window:confirm', () => false); // Click Cancel
            cy.get('#confirmButton').click();
            cy.get('#confirmResult').should('have.text', 'You selected Cancel');
    
         
    })
    
    it("Wait time" ,() => {
        cy.visit("https://demoqa.com/alerts");
        cy.get("#timerAlertButton").click();
        cy.wait(5000); 
        cy.on("window:alert",str =>{ 
            expect(str).to.equal("This alert appeared after 5 seconds");
        })
      
       })


    it("Stub" ,() => {
        cy.visit("https://demoqa.com/alerts");
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("Testname")
        });
        cy.get("#promtButton").click();
        cy.get("#promptResult").should("contain","Testname");
        cy.get("#promptResult").should("have.text","You entered Testname");

       })
       })