describe("test Calender", () => {
    it("test1", () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        cy.get(".react-date-picker__calendar-button").click();
        cy.get(".react-calendar__navigation__next-button").click();
        // cy.get('abbr').contains(20).click();
        cy.get('.react-calendar__tile abbr').contains("20").click();
        cy.get(".react-date-picker__inputGroup input").should("have.value", "2025-02-20");

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
