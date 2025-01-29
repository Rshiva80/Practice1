describe("Test the functionality" , () =>{
   
    before(()=> {
   
    cy.fixture("example.json").as("data");

    cy.visit("https://rahulshettyacademy.com/angularpractice/")

    })

        it("test case1 with Fixtures2", function () {
       
        // cy.get("tr>td:nth-child(2)").each(($el,index,$list) =>{
        //     const bookName = $el.text();
        
        //       if (bookName.includes("QA"))
        //         {
        //         cy.get("tr>td:nth-child(2)").each(($el,index,$list) =>{

        //       })
        //         }
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
        //cy.get("input[name='name']:nth-child(2)").type(this.data.name);

            })
        })

      

        // cy.get("tr td:nth-child(2)").eq(index).next().then((price)=>{ //will get index = 7 

        //     const priceText = price.text();
        //     expect(priceText).to.equal("25");