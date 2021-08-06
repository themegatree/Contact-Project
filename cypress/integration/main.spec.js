describe('Main Tests',() => {

    beforeEach(() => {
        cy.task("taskTruncateTables")
        cy.visit('/contacts')
        cy.get('#nameInput').type('Mike')
        cy.get('#emailInput').type('mike@mikemail.za')
        cy.get('#dobInput').type('1990-09-21')
        cy.get('#contactAdd').click()
    })

    it('Adding a contact', () => {        
        cy.get('#contactName0').should('contain', 'Name: Mike')
        cy.get('#contactEmail0').should('contain', 'Email: mike@mikemail.za')
        cy.get('#contactDob0').should('contain','Date of Birth: 1990-09-21') 
    })

    it("Edit", () =>{
        cy.get("#edit0").click()


        cy.get('#nameInput')
            .clear()
            .type('Micheal')
        cy.get('#emailInput')
            .clear()
            .type('micheal@hotmikemail.com')
        cy.get('#dobInput')
            .clear()
            .type('3000-01-01')
        cy.get("#contactAdd").click()

        cy.get('#contactName0').should('contain', 'Name: Micheal')
        cy.get('#contactEmail0').should('contain', 'Email: micheal@hotmikemail.com')
        cy.get('#contactDob0').should('contain','Date of Birth: 3000-01-01') 

    })

    it("Delete", () => {
        cy.get("#delete0").click()
        cy.get('#contactName0').should("not.exist")
        cy.get('#contactEmail0').should("not.exist")
        cy.get('#contactDob0').should("not.exist") 

    })
})