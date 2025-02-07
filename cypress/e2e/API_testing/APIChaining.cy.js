describe("API chaining", ()=>{

    it("First test",() =>{
        
        cy.request ({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/posts"
        }).then((response) =>{
            expect(response.status).to.eq(200);
            const getID = response.body[0].id;
            return getID;
        }).then((getID) => {
             
            cy.request ({
                method:"GET",
                url:"https://jsonplaceholder.typicode.com/comments?getID=${getID}"

        })
        .then((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(500);
        })
    })
})
})