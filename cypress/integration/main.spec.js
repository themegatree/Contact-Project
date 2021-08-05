describe('Main Tests',() => {

    beforeEach(() => {
        // cy.task('log', 'This will be output to the terminal')
        cy.task("taskTruncateTables");
    })

    it('Adding a contact', () => {
        cy.visit('/contacts')
        cy.get('#nameInput').type('Mike')
        cy.get('#emailInput').type('mike@mikemail.za')
        //cy.get('#dobInput').type('1990-09-21')
        cy.get('#contactAdd').click() 

        cy.get('#contactName0').should('contain', 'Name: Mike')
        cy.get('#contactEmail0').should('contain', 'Email: mike@mikemail.za')
        //cy.get('#contactDob0').should('contain','Date of Birth: 1990-09-21') 
        
    })
})