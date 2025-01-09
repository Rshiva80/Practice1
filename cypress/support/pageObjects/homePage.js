class HomePage
{

    getName()   
    {
        return cy.get("input[name='name']:nth-child(2)");

    }
    emailAdd()
    {    
        return cy.get("form input[name='email']")
    }
    getPassword() 
    {
        return cy.get('[placeholder="Password"]')
    }
    getcheckbox1()
    {
        return cy.get("#exampleCheck1")
    }
    getGender()
    {
        return cy.get("select")
    }
}
export default HomePage;