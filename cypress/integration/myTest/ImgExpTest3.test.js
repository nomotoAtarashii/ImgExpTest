/// <reference types="cypress" />

describe('Sprint 3 Test', () => {

    // Verify that input tags are required
    it('sign_up_01 - Verify that input tags are required', () => {
        // STEPS TO DO
        // Visit the imgexp site
        cy.visit('http://imgexp.herokuapp.com', {setTimeout: 600000})
        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        // Click SIGN UP button without input
        cy.get('#signUpSubmit').click()
        
        // CHECK RESULTS
        // Check that the current page is still the userLogin page
        cy.url().should('include', '/userLogin')
        cy.url().should('eq', 'http://imgexp.herokuapp.com/userLogin')
        // Check that error message is being output
        cy.contains('Email is required').should('exist')
        cy.contains('Password is required').should('exist')
        cy.contains('Test Commit').should('not.exist')
        
    })

})