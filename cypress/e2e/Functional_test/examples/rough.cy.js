describe("test dropdown",() =>{
    
    it("test",() =>{
        const searchCommodity = "Wheat";

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers/");
      
        cy.get("tr td:nth-child(1)").each(($el,index,$list) =>{

            if($el.text() == searchCommodity){
            cy.get("tr td:nth-child(3)").eq(index).should("have.text","28");
               
            }
        })


      
    })
})