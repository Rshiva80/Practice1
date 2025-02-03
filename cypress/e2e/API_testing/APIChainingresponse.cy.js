// Create POST request
// Get the details
//Make changes  or updates and then 
// DElete the record
 
describe("Chaining API response", () => {
    const auth_user = "Bearer f3f10662988692f3b535c8eae551deee9a7257eb7a914e82d126aa685b193437";

    it("Post Request and Update", () => {
        // Step 1: Create a new user
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: { Authorization: auth_user },
            body: {
                name: "Ajay16",
                email: `Ajay16_${Date.now()}@example.com`, // Ensure unique email
                gender: "male",
                status: "inactive"
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            const userId = response.body.id; // Extract user ID from response

            // Step 2: Update the user
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: { Authorization: auth_user },
                body: { name: "Vijay" }

            }).then((updateResponse) => {
                expect(updateResponse.status).to.eq(200);
                expect(updateResponse.body.name).to.eq("Vijay");
            });

            // Step 3: Validate the update
            cy.request({
                method: "GET",
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: { Authorization: auth_user }
            }).then((getResponse) => {
                expect(getResponse.status).to.eq(200);
                expect(getResponse.body.name).to.eq("Vijay"); // Should match updated name
            });
        });
    });
});
