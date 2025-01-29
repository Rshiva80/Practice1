describe("test API request" , () =>{

    it("test the GET req" , () => {

        cy.request({
            method :"GET",
            url : "https://rahulshettyacademy.com/Library/GetBook.php?author=John",
        
    })
    .its("status").should("equal",200);

    })



    it("test POST req" ,() => {

        cy.request({
            method:"POST",
            url:"https://jsonplaceholder.typicode.com/posts/",
            body : {
                title : "Test Post",
                body : "this is post call",
                userID: 1
            },
        })
        .its("status").should("equal",201);

    })

    it("Test PUT call" , () =>{

        cy.request ({
            method : "PUT",
            url : "https://jsonplaceholder.typicode.com/posts/1",
            body : {

                title : "Test Post",
                body : "This is put call",
                userID : 3,
                ID : 1

            },

        })
        .its("status").should("equal",200);

    })

})