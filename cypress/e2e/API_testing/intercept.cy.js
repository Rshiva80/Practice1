describe("Using Intercept",() =>{
    it("test case1", () => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    
        cy.intercept({
            method : "GET",
            url : "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        },
        {
            statusCode : 200,
            body :
        [
            {
            book_name: "RestAssured with JavaRuby",
            isbn: "XXX",
            aisle: "4303"
         }],
        }).as("bookretrieval");
        cy.get('button[class="btn btn-primary"]').click();
        cy.wait("@bookretrieval");
        cy.get("p").should("have.text","Oops only 1 Book available");
    })
})