/// <reference types="cypress" />

describe('Sign Out Test', () => {

    beforeEach(() => {
        // VISIT & LOG IN
        cy.visit('http://imgexp.herokuapp.com', { setTimeout: 6000 })
        // Click Sign-in button
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        cy.get('#sign-in-btn').click();
        cy.get('#signInEmail').type('test@gmail.com')
        cy.get('#signInPassword').type('AbCd!232')
        // Click SIGN UP button to submit
        cy.get('#signInSubmit').click({ force: true })
        cy.wait(1500)
    })

    it('sign_out_01 - Check the sign in button exist after signing out', () => {
        // Sign out
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.dropdown > button > i').click({ force: true })
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(3) > a').click({ force: true })
        cy.wait(2000)

        // Check result
        // Check that sign in button exist in home page
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in.ng-star-inserted').should('exist')
        cy.url().should('eq', 'http://imgexp.herokuapp.com/')
    })

})