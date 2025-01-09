describe("Test Login functionality", { browser: chrome }, () => {
  before(() => {
    cy.visit("https://demoqa.com/login");
  });
  it("Test Welcome", () => {
    cy.get('[placeholder="UserName"]', { timeout: 10000 })
      .should("be.visible")
      .type("test");
    cy.get('[placeholder="Password"]', { timeout: 10000 })
      .should("be.visible")
      .type("Harrison@123");
    cy.contains("button", "Login", { timeout: 10000 })
      .should("be.visible")
      .click();

    //Assertion
    cy.url().should("contains", "/profile");
  });
});
