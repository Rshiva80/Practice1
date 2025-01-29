// // <div>
//   <p class="text-primary">Hello World</p>
//   <p class="text-danger">You have an error</p>
//   <p class="text-default">Try again later</p>
// </div>

cy.get("p").should("not.be.empty").and(($p)=>{
     // should have found 3 elements

     expect($p).to.have.length(3);

     // make sure the first contains some text content
     expect($p.first()).to.contain("Hello World");

    // use jquery's map to grab all of their classes
    // jquery's map returns a new jquery object

    const classes = $p.map((i,$el) =>{
        return Cypress.$(el).attr("class")
    }) 
    // / call classes.get() to make this a plain array
    
    expect(classes.get()).to.deep.eq([
      'text-primary',
      'text-danger',
      'text-default',
    ])
  })

 