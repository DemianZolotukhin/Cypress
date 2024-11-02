/// <reference types="cypress"/>
const { generateUser } = require("../support/generateUser");

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('user/login')
  })

  it('should click on Sign In button', () => {
    cy.contains('Sign in').click()

    cy.get('h1').should('contain.text', 'Sign in')
  })
})