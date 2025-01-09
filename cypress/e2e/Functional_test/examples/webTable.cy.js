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

})