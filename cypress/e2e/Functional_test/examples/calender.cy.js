describe("test Calender", () => {
    it("test1", () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        cy.get(".react-date-picker__calendar-button").click();
        cy.get(".react-calendar__navigation__next-button").click();
        // cy.get('abbr').contains(20).click();
        cy.get('.react-calendar__tile abbr').contains("20").click();
        cy.get(".react-date-picker__inputGroup input").should("have.value", "2025-02-20");

    })

    it.only("test2", () => {

        const month = "5";
        const day = "20";
        const year = "2027";
        const expectedDate = [month,day,year]; // ["5", "20", "2027"]

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        cy.get(".react-date-picker__calendar-button").click();
        cy.get(".react-calendar__navigation__label__labelText").click();
        cy.get(".react-calendar__navigation__label__labelText").click();
        cy.contains("button",year).click();
        cy.get(".react-calendar__tile").eq(month-1).click();
        cy.contains("abbr",day).click();

        //Assertion
        cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>{
            cy.log(cy.wrap($el).invoke("val"));
            cy.wrap($el).invoke("val").should('eq',expectedDate[index]);
//   The values are checked in order:
// expectedDate[0] → Month (e.g., "5")
// expectedDate[1] → Day (e.g., "20")
// expectedDate[2] → Year (e.g., "2027")
        })
        
    })
})
// describe("test Calendar", () => {
//     it("test1", () => {

//         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");

//         // Click calendar button
//         cy.get(".react-date-picker__calendar-button").click();

//         // Click next button to navigate to next month
//         cy.get(".react-calendar__navigation__next-button").click();

//         // Select the 20th day
//         cy.get('.react-calendar__tile abbr').contains("20").click();

//         // Verify the selected date
//         cy.get(".react-date-picker__inputGroup input").should("have.value", "02/20/2025");

//     });
// });
