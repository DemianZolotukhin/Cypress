/// <reference types="cypress"/>

describe('Sign In page', () => {

  it('should have a correct title', () => {});
  it('should require an email', () => {});
  it('should require a password', () => {});
  it('should show an error for wrong email', () => {});
  it('should show an error for wrong password', () => {});

  it('Should allow to log in', () => {
    cy.visit('/user/login');

    cy.registerNewUser().then(({ email, password, username }) => {

      cy.findByPlaceholder('Email').type(email);

      cy.findByPlaceholder('Password').type(password + `{Enter}`); // симуляція кліку Enter

      // cy.get('.btn').click()

      cy.get(':nth-child(4) > .nav-link').should('contain.text', username)
      // Лучше добавить атрибут, который четко опишет елемент.
    })
  })
})