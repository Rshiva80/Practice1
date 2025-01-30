describe("API parsing JSON response",()=>{

    it("Parsing simple JSon response", () =>{

        cy.request({
            method:"GET",
            url: "https://fakestoreapi.com/products"


        })
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body[0].id).to.eq(1);
            expect(response.body[0].price).to.eq(109.95);
            expect(response.body[0].rating.count).to.eq(120);
            expect(response.body[1].rating.count).to.eq(259);
        })
    })

    it.only("Parsing query JSon response ", () =>{
        let totalprice = 0;

        cy.request({
            method:"GET",
            url: "https://fakestoreapi.com/products",
            qs : {limit:5}

        })
        .then((response) => {
            response.body.forEach(element => {
                totalprice = totalprice + element.price;
            
            });
            expect(totalprice).to.equal(899.23);
        })
    })
    it.only("Parsing query JSon response ", () =>{
        

        cy.request({
            method:"GET",
            url: "https://fakestoreapi.com/products",
            qs : {limit:5}

        })
        .then((response) => {
            response.body.forEach(element => {
                if(element.rating.rate > 4){
                    cy.log(`High Rated Product: ${element.title} - Rating: ${element.rating.rate}`);
                    expect(element.rating.rate).to.be.greaterThan(4);
                }
           
            });
          
     
        })
    })
})