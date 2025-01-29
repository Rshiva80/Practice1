// first create POST request to generate access token, 
// second  is POST to submit new oder for the book with new book data ad=nd access token
// Use GET request to get the order details of the POST request and validate them
// API https://simple-books-api.glitch.me/
// will use hooks 


describe("The API bearer token testing",()=>{

    // 1st step

    let authToken = null; // to store auth token we got from post request

       before("Generate access token ",() => {

            cy.request({
                
                method : "POST",
                url : "https://simple-books-api.glitch.me/api-clients/",
                headers : {
                    'Content-Type':'application/json'
                            },
                    
                body : 
                    {
                        "clientName": "TestClient",
                        "clientEmail": Math.random().toString(5).substring(2)+ "@gmail.com"
                     }

                     
                }).then((response => {
                    authToken = response.body.accessToken;

                }))

            })

            // 2nd Step

            before("Create new Token ",() => {

                cy.request({
                    
                    method : "POST",
                    url : "https://simple-books-api.glitch.me/orders",
                    headers : {
                    'Content-Type':'application/json',
                    'Authorization' : 'Bearer ' + authToken

                    },

                        
                    body : 
                        {
                            "bookId": 1,
                             "customerName": "testcustomername"
                         }
    
                         
                    }).then((response => {
                       expect(response.status).to.eq(201);
                       expect(response.body.created).to.eq(true);
    
                    }))
    
                })
              //  Step 3
            
                it("Fetching the orders", () => {
                    cy.request({
                        method: "GET",
                        url: "https://simple-books-api.glitch.me/orders",
                        headers : 
                        {
                            'Content-Type':'application/json',
                             'Authorization' : 'Bearer ' + authToken
                        },
                        cookies : 
                        {
                            'cookieName' :'mycookie'
                
                        }
                    }).then((response =>{
                        expect(response.status).to.eq(200);
                        expect(response.body).has.length(1);
                        
                    }))
                })

        })