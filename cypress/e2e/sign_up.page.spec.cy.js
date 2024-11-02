const { generateUser } = require("../support/generateUser");

describe('Sign Up page', () => {
    beforeEach(() => {
        cy.visit('/user/register');
    })

    it('should register user', () => {
        const { username, email, password } = generateUser()

        cy.get('h1')
            .should('contain.text', 'Sign up');

        cy.findByPlaceholder('Username')
            .type(username)

        cy.findByPlaceholder('Email')
            .type(email)

        cy.findByPlaceholder('Password')
            .type(password)

        cy.get('.btn')
            .click()

        cy.contains('a', 'Global Feed')
            .should('contain.text', 'Global Feed')

        cy.assertPageUrl1();
    });

    it('should not allow register with an existed email', () => {
        const { username, email, password } = generateUser()

        cy.get('h1')
            .should('contain.text', 'Sign up');

        cy.get('[placeholder=Username]')
            .type(username + '_new')

        cy.get('[placeholder=Email]')
            .type(email)

        cy.get('[placeholder=Password]')
            .type('1245676583')

        cy.get('.btn')
            .click()

        cy.contains('a', 'Global Feed')
            .should('contain.text', 'Global Feed')

        cy.contains('a', ' Settings')
            .click()

        cy.url().should('equal', Cypress.config().baseUrl + 'settings')
        cy.get('h1')
            .should('contain.text', 'Your Settings')

        cy.contains('button', 'Or click here to logout.')
            .click()

        cy.url().should('equal', Cypress.config().baseUrl)
        cy.get('h1')
            .should('contain.text', 'conduit')

        cy.visit('/user/register')

        // cy.request('POST', '/user/register', {
        //     email,
        //     password,
        //     username,
        // });

        cy.get('[placeholder=Username]')
            .type(username + '_new')

        cy.get('[placeholder=Email]')
            .type(email)

        cy.get('[placeholder=Password]')
            .type(password)

        cy.get('.btn')
            .click()

        cy.contains('li', 'This email is taken.')
    });

    it('should register user(Method implementation/response doesnt work)', () => {
        cy.registerNewUser()

        cy.get('.btn')
            .click()

        cy.contains('a', 'Global Feed')
            .should('contain.text', 'Global Feed')

        cy.assertPageUrl1();
    });

    // it('should register user', () => {
    //     cy.registerNewUserResponse().then(({ username, email, password }) => {
    //         cy.get('h1')
    //             .should('contain.text', 'Sign up');

    //         cy.findByPlaceholder('Username')
    //             .type(username)

    //         cy.findByPlaceholder('Email')
    //             .type(email)

    //         cy.findByPlaceholder('Password')
    //             .type(password)

    //         cy.get('.btn')
    //             .click()

    //         cy.contains('a', 'Global Feed')
    //             .should('contain.text', 'Global Feed')

    //         cy.assertPageUrl1();
    //     })
    // });
    // response ne robe pizda
})