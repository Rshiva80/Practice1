describe("test with custom commands", () => {

    before(()=>
        {
    
            cy.fixture("example.json").as("data");
            cy.visit(Cypress.env("urlTest") + "/angularpractice/");
        })

        
        it.skip("Test1 without the custom command ",() =>{
            //cy.get(':nth-child(2) > .nav-link').click();
            cy.get("a.nav-link").contains("Shop").click();
            cy.get("h4.card-title").each(($el,index,$list) => {

               if( $el.text().includes("Blackberry")){

                    cy.get("button.btn.btn-info").eq(index).click();
               }
            })
        })
            it.skip("Test2 with the custom command",() =>{
                 
                cy.get("a.nav-link").contains("Shop").click();
                cy.selectProduct("Blackberry");
                cy.selectProduct("Nokia Edge");
                

        })

        it("Test3 with the custom command and fixture", function () { 

            var sum = 0;
             
            cy.get("a.nav-link").contains("Shop").click();
            
                //cy.get("input[name='name']:nth-child(2)").type(this.data.name);
                this.data.productName.forEach(( element) => 
                cy.selectProduct(element)
               

            )
            cy.get("a.nav-link.btn.btn-primary").click();
            cy.get("tr td:nth-child(4) strong").each(($el,index,$list) => {
               const Price = $el.text()
               var res = Price.split(" ");
               
               res =  res[1].trim();
             
               sum = sum + Number( res ) ;
               
            }) .then(function(){
            cy.log(sum);
            })

            cy.get("td h3 strong").then(function(element){

                const t = element.text();
                var total  = t.split(" ");
                total  = total[1] .trim ();
                var FinalTotal = Number(total);
                expect(FinalTotal).to.equal(sum);
            })


        });
            
         });
        
            

   
     
 



 