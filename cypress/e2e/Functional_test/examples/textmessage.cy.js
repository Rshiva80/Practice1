describe("Test the functionality" , () =>{
   
    it("test1",() => {
    cy.visit("https://www.flipkart.com/");
    cy.contains("span","Login").click();
    cy.get(".r4vIwl").type("1222");
    cy.contains("button","Request OTP").click();
    cy.get(".llBOFA").then((message)=>{
        expect(message.text()).to.include("Please enter valid Email ID")
    })
      })
        })