
describe("test API with fixture",() =>{

    it("test API",() =>{

        cy.fixture("albums.json").then((data) => {
        
    

        cy.request ({
            url : "https://jsonplaceholder.typicode.com/albums",
            method : "POST",
            body : data, 
            
        
            headers :
            {
                "Content-Type" : "application/json; charset=utf-8"
            }

        }).then((response) =>{
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property("title",data.title);
           expect(response.body).to.have.property("userId",data.userId);
     
           expect(response.headers).to.have.property("content-type").and.include("application/json")
            
        })
    })
});
});

 