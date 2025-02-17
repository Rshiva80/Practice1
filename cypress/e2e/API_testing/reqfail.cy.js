describe("Basic API testing", () => {
    it("GEt API", () => {
      cy.request({
        method :"GET",
        url : "https://jsonplaceholder.typicode.com/invalid-endpoint",
    
        failOnStatusCode: false
      }).then((response)=>{
        expect(response.status).to.eq(404);
    })
    });
});