describe("Basic API testing", () => {
  it("GEt API", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("equal", 200);
  });

  it("Post API", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts/",
      body: {
        title: "Test Post",
        body: "this is post call",
        userID: 1,
      },
    })
      .its("status")
      .should("equal", 201);
  });

  it("Put", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        title: "Test Post",
        body: "This is put call",
        userID: 3,
      },
    })
      .its("status")
      .should("equal", 200);
  });

  it("QueryParameter", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
      qs: { page: 2 },
    }).then((response) => {
      expect(response.status).equal(200);
      expect(response.body.page).equal(2);
      expect(response.body.data).has.length(6);
      expect(response.body.data[0]).have.property("id", 7);
    });
  });
});
