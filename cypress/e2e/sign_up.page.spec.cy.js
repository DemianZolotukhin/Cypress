const { generateUser } = require("../support/generateUser");

describe('Sign Up page', () => {
    beforeEach(() => {
        cy.visit('/user/register');
    })

    it('should have a correct title', () => { });
    it('should require an username', () => { });
    it('should require an email', () => { });
    it('should require a password', () => { });

    it('should register user/register using UI', () => {
        const { username, email, password } = generateUser()

        cy.get('h1')
            .should('contain.text', 'Sign up');

        cy.get('[placeholder=Username]')
            .type(username + '_new')

        cy.get('[placeholder=Email]')
            .type(email)

        cy.get('[placeholder=Password]')
            .type(password)

        cy.get('.btn')
            .click()

        cy.contains('a', 'Global Feed').should('contain.text', 'Global Feed')

        cy.assertPageUrl('/');
    });

    it('should not allow register with an existed email/testing with UI', () => {
        const { username, email, password } = generateUser()

        cy.get('h1').should('contain.text', 'Sign up');

        cy.findByPlaceholder('Username').type(username)

        cy.findByPlaceholder('Email').type(email)

        cy.findByPlaceholder('Password').type(password)

        cy.get('.btn').click()

        cy.contains('a', 'Global Feed').should('contain.text', 'Global Feed')

        cy.contains('a', ' Settings').click()

        cy.assertPageUrl('/settings')

        cy.get('h1').should('contain.text', 'Your Settings')

        cy.contains('button', 'Or click here to logout.').click()

        cy.assertPageUrl('/');

        cy.get('h1').should('contain.text', 'conduit')

        // cy.request('POST', 'https://conduit.mate.academy/api/users', {
        // user: {
        //     email,
        //     password,
        //     username,
        //   }
        // });

        cy.visit('/user/register')

        cy.get('[placeholder=Username]').type(username + '_new')

        cy.get('[placeholder=Email]').type(email)

        cy.get('[placeholder=Password]').type(password)
        //typing without custom method
        //same as cy.findByPlaceholder('Username').type(username)

        cy.get('.btn').click()

        cy.contains('li', 'This email is taken.')
    });

    it(`should not allow register with an existed email 'POST request implementation'`, () => {
        cy.registerNewUser().then(({ username, email, password }) => {

            cy.findByPlaceholder('Username').type(username)

            cy.findByPlaceholder('Email').type(email)

            cy.findByPlaceholder('Password').type(password)

            cy.get('.btn').click()

            cy.contains('li', 'This email is taken.')
        })
    });
})