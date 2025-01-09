describe("test the hooks",()=>{
    before(()=>
    {

        cy.fixture("example.json").as("data");
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
    })

    // it("test case1",()=>{
    //     cy.visit("https://rahulshettyacademy.com/angularpractice/");
    //     //cy.get("form input[name='name']").type("Test Name");
    //     cy.get("input[name='name']:nth-child(2)").type("Test Name");
    //     cy.get("form input[name='email']").type("TestN@test.com");
    //     cy.get("select").select("Female");
    //})
    
    it("test case1 with Fixtures",()=>{
        cy.get("@data").then((data) => {
        cy.get("input[name='name']:nth-child(2)").type(data.name);
        cy.get("select").select(data.gender);
        })
    })
})

describe("test the hooks2", () => {
    before(function () { // Use `function` here to bind `this` context
        cy.fixture("example.json").as("data");
        cy.visit("https://rahulshettyacademy.com/angularpractice/");
    });

    it("test case1 with Fixtures2", function () { // Use `function` here to access `this.data`
        cy.get("input[name='name']:nth-child(2)").type(this.data.name);
        cy.get("select").select(this.data.gender);
        cy.get('input[name = "name"]:nth-child(1)').should("have.value",this.data.name);
        cy.get("input[name='name']:nth-child(2)").should("have.attr","minlength",2);
        cy.get("#exampleCheck1").should("not.be.checked");
    
    });


});
