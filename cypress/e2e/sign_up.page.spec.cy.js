describe('Sign Up page', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('should have all main part', () => {
        cy.get('.mainHeading')
        .should('contain.text', 'XYZ Bank');

        cy.contains('button', 'Bank Manager Login')
        .should('exist')
        .click()

        cy.contains('button', 'Add Customer')
        .should('exist')
        .click()

        cy.get(':nth-child(1) > .form-control')
        .type('user_test')

        cy.get(':nth-child(2) > .form-control')
        .type('user_test')

        cy.get(':nth-child(3) > .form-control')
        .type('71919')

        cy.get('form.ng-dirty > .btn')
        .click()
    });
})