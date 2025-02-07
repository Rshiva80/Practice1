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
            expect(response).to.have.property('headers');
            expect(response.body).to.have.property("aisle",requestBody.aisle);
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
describe("test API with fixture",() =>{

    it("test API",() =>{

        cy.fixture("albums.json").then((data) => {
        
    

        cy.request ({
            url : "https://jsonplaceholder.typicode.com/albums",
            method : "POST",
            body : data, 
            
        
            headers :
            {
                "Content-Type" : "application/json; charset=utf-8"
            }

        }).then((response) =>{
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property("title",data.title);
           expect(response.body).to.have.property("userId",data.userId);
            
        })
    })
});
});