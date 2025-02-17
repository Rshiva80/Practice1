describe("Test Popups",() =>{

    it("test okpop up",() =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.viewport('iphone-8');
        cy.get('[value="Alert"]').click();
        // OK 
        cy.on('window:alert',str =>{

            expect(str).to.eq("Hello , share this practice page and share your knowledge");

        })

        // confirm

        cy.get('#confirmbtn').click();
        cy.on('window:confirm',str =>{

            expect(str).to.eq("Hello , Are you sure you want to confirm?");
        })

    })

})