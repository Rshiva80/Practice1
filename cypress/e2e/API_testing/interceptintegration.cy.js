// in continutation of intercept.cy
// This TC validates that the rows on FE matches with BE 

describe("Validates that the rows on FE match with BE", () => {
    it("TC for matching FE and BE", () => {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        // Intercepting API request
        cy.intercept("GET", "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty", {
            statusCode: 200,
            body: [
                {
                    book_name: "RestAssured with JavaRuby",
                    isbn: "XXX",
                    aisle: "4303"
                }
            ]
        }).as("bookretrieval");

        // Clicking button to trigger API call
        cy.get('button[class="btn btn-primary"]').click();

        // Waiting for API response and validating UI
        cy.wait("@bookretrieval").then((interception) => {
            expect(interception.response.statusCode).to.eq(200); // Ensure API returned successfully
            cy.get("tr").should("have.length", interception.response.body.length + 1);
        });
    });
});
