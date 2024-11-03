/// <reference types="cypress"/>

describe('My home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have a title', () => {
    cy.get('h1').should('contain.text', 'conduit');
  });

  it('should have a feed', () => {
    cy.contains('a', 'Global Feed').should('exist')
  });

  it('should have a Popular Tags sidebar', () => {
    cy.contains('.sidebar', 'Popular Tags').should('exist')
  });

  it('should have a link for Sign In', () => {
    cy.contains('a', 'Sign in').should('have.attr', 'href', '/user/login')
  })

  it('should have a link for Sign Up', () => {
    cy.contains('a', 'Sign up').should('have.attr', 'href', '/user/register')
  })
})


// cy.contains('a', 'Sign up')
// .should('exist').click()


// cy.url().should('include', '/register')

// cy.get('h1').should('contain.text', 'Sign up')