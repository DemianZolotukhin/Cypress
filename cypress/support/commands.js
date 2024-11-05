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

Cypress.Commands.add('assertPageUrl', (url) => {
    cy.url().should('equal', Cypress.config().baseUrl + url)
})

// Cypress.Commands.add('assertPageUrl', (url) => {
//     cy.hash().should('equal', '#' + url)
// })

Cypress.Commands.add('registerNewUser', () => {
    const { username, email, password } = generateUser()

    cy.request('POST', 'https://conduit.mate.academy/api/users', { 
        user: {
        email,
        password,
        username
    }}).then(response => ({
        ...response.body.user,
        password,
    }))
})

// Cypress.Commands.add('findByTestId', (value) => {
//     cy.get(`[data-cy=${value}]`)
// })

// Cypress.Commands.add('CheckAuthorization', (username) => {
//     cy.findByTestId('header-username')
//     .should('contain.text', username)
// })
// Методи для проверки по атрибуту, но уменя нету доступа к редактированию css

Cypress.Commands.add('login', (user) => {
    cy.request('POST', 'https://conduit.mate.academy/api/users/login', {
        user
    }).then((response) => {
        expect(response.status).to.eq(200);
        const user = {
          username: response.body.user.username,
          email: response.body.user.email,
          token: response.body.user.token,
          bio: response.body.user.bio,
          image: response.body.user.image,
          effectiveImage:
            'https://www.onthisday.com/images/people/homer-simpson.jpg?w=360',
        };
        window.localStorage.setItem('user', JSON.stringify(user));
        cy.setCookie('auth', response.body.user.token);
    })
})