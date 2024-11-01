/// <reference types="cypress"/>

describe('My home page', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    
    it('should click on Sign In button', () => {
      cy.contains('Sign in').click()
  
      cy.get('h1').should('contain.text', 'Sign In')
    })
  })