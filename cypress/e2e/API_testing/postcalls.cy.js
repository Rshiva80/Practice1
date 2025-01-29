describe("Post calls", () => {
  it("1st Approach hard coded", () => {

    const requestBody = {
        name:"Learn Appium Automation with Java",
        isbn:"bcd",
        aisle:"227",
        author:"John foe"
        
    };
    cy.request(
        {

            method : "POST",
            url : "https://rahulshettyacademy.com/Library/Addbook.php",
            body : requestBody

        })

        .then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.Msg).to.equal("Book Already Exists");
            expect(response).to.have.property('headers');
        })    
 
  });

  it.skip("2nd Approach dymanic data", () => {

    const requestBody = {
        name:"Learn Appium Automation with Java2",
        isbn:"bcdf",
        aisle: Math.floor(100 + Math.random() * 900),
        author: "John Goo" 
        
    };
    cy.request(
        {

            method : "POST",
            url : "https://rahulshettyacademy.com/Library/Addbook.php",
            body : requestBody

        }) .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.Msg).to.eq("successfully added");
           // expect(response.body.aisle).to.equal("228")
          // expect(response.body.aisle).to.eq(requestBody.aisle.toString()); 
            expect(response).to.have.property('headers');
        })
         
 
  });


  it("3rd Approach fixture", () => {

    cy.fixture('book.json').then((data)=> {

        const requestBody = data;

        cy.request(
            {
    
                method : "POST",
                url : "https://rahulshettyacademy.com/Library/Addbook.php",
                body : requestBody
    
            })
    
            .then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.Msg).to.equal("successfully added");
                expect(response).to.have.property('headers');
            })    
     
    })
   
  });

});
