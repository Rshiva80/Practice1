 describe("test the web table",()=>{

    it("Web Table1",()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get("tr td:nth-child(2)").each(($el,index,$list)=>{

            const courseText = $el.text();
            if(courseText.includes("Python"))
            {
                // next() is only applied to get 
                cy.get("tr td:nth-child(2)").eq(index).next().then((price)=>{ //will get index = 7 

                    const priceText = price.text();
                    expect(priceText).to.equal("25");
                })

            }


        });
        



    })

    it("test API",() =>{

        const searchcity = "Chennai";

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("tr td:nth-child(2)").each(($el,index) => {

            const name = $el.text();

            if (name.includes("Postman"))
            {

               cy.wrap($el).next().should("have.text", searchcity);
             

            //cy.wrap($el): Converts the jQuery element ($el) into a Cypress object, enabling Cypress commands.
        };
        })
        cy.get(".totalAmount").should("have.text"," Total Amount Collected: 296 ");
})
})
 
 