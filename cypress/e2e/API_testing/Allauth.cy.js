//API Authentications - Basic, Digest, Bearer Token & API Key | Part 7 
// https://www.youtube.com/watch?v=j-WT-4TdBt0&list=PLUDwpEzHYYLtoD-O_KzRrLngmEG7BBb1n&index=7

describe("Basic Auth",() => {
    it("Basic Authorization username and password",() => {
        cy.request ({
            method : "GET",
            url : "https://postman-echo.com/basic-auth",
            auth: {
                user:"postman",
                password:"password"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.authenticated).to.equal(true);
        })
    })

    //Authenticate with Digest access authentication in Postman

    it("Authenticate with Digest",() => {
        cy.request ({
            method : "GET",
            url : "https://postman-echo.com/basic-auth",

            auth: {
                user:"postman",
                password:"password",
                method : "digest"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.authenticated).to.equal(true);
        })
    });
})