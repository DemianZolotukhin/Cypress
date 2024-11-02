/// <reference types="cypress"/>
const { generateUser } = require("../support/generateUser");
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('findByPlaceholder', (placeholder) => {
    cy.get(`[placeholder=${placeholder}]`)
})

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
//     originalFn('/#' + url)
// })


Cypress.Commands.add('assertPageUrl1', () => {
    cy.url().should('equal', Cypress.config().baseUrl)
})

Cypress.Commands.add('assertPageUrl', (url) => {
    cy.url().should('equal', Cypress.config().baseUrl + url)
})

Cypress.Commands.add('registerNewUser', () => {
    const { username, email, password } = generateUser()

    cy.get('h1')
        .should('contain.text', 'Sign up');

    cy.findByPlaceholder('Username')
        .type(username)

    cy.findByPlaceholder('Email')
        .type(email)

    cy.findByPlaceholder('Password')
        .type(password)
})

// Cypress.Commands.add('registerNewUserResponse', () => {
//     const { username, email, password } = generateUser()

//     cy.request('POST', assertPageUrl('user/register'), {
//         email,
//         password,
//         username
//     }).then(response => ({
//         ...response.body.user,
//         password,
//     }))
// })

// response ne robe pizda