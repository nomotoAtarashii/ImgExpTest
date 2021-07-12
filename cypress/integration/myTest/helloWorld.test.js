/// <reference types="cypress" />

describe('Sprint 3 Test', () => {
    it('Sign-up', () => {
        cy.viewport(1000, 660)
        // visit website
        cy.visit('http://imgexp.herokuapp.com')
        
        // click Sign-in
        cy.get('body > app-root > app-home > app-header > div > header > a.btn.btn-danger.rounded-pill.sign-in').click()
        
        // enter email, password and confirm password
        cy.get('#signUpEmail').type('abc@gmail.com')
        cy.get('#signUpPassword').type('qwerty')
        cy.get('#signUpRepassword').type('qwerty', {force:true})
    })

    it('sign_up_01', () => {
        
        
    })

    it('sign_up_02', () => {
        
    })

    it('sign_up_03', () => {
        
    })

    it('sign_up_04', () => {
        
    })
    
    it('sign_up_05', () => {
        
    })

    it('sign_up_06', () => {
        
    })

    it('sign_up_07', () => {
        
    })

    it('sign_up_08', () => {
        
    })
})