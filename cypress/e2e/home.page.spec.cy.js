/// <reference types="cypress"/>

describe('My home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have all parts', () => {
    cy.get('.login_logo')
      .then((element) => {
        console.log(element)

        return element;
      })
      .should('contain.text', 'Swag Labs');

    cy.contains('a', 'Global Feed')
      .should('exist')

    cy.contains('.sidebar', 'Popular Tags')
      .should('exist')
  })

  it('should click on Sign In button', () => {
    cy.contains('a', 'Sign in')
    .should('exist').click();
    
    cy.url().should('include', '/login')
    cy.get('h1').should('contain.text', 'Sign In')
  })

  it('should click on Sign Up button', () => {
    cy.contains('a', 'Sign up')
    .should('exist')
    .click()

    
    cy.url().should('include', '/register')
    cy.get('h1').should('contain.text', 'Sign Up')
  })
})