/// <reference types="cypress" />

describe('Like Post Test', () => {
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

    it('post_like_01 - When liking a photo, the user must log in', () => {
        // LOG OUT
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > button > i').click({ force: true })
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(3) > a').click({ force: true })
        // VIEW POST
        cy.get('body > app-root > app-home > div > div > div > app-image > a > div > img').trigger('mouseover')
        cy.get('body > app-root > app-home > div > div > div > app-image > a > div > div').click({ force: true })

        // CHECK RESULTS
    })

    afterEach(() => {
        // LOG OUT
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > button > i').click({ force: true })
        cy.get('body > app-root > app-home > app-header > div > header > div.btn-group.drop-menu.btn-sm.ng-star-inserted.show.dropdown > ul > li:nth-child(3) > a').click({ force: true })
    })
})