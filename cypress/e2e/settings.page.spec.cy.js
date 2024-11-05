describe('Settings page', () => {
    beforeEach(() => {
        cy.visit('/user/login');

        // cy.intercept('POST', '/api/users/login').as('login')
        cy.registerNewUser().then((user) => {
            cy.login(user).then(() => user)
        }).as('user')

        // cy.wait('@login')

        cy.visit('/settings');
    })

    it('should have a correct title', () => {

        cy.get('h1').should('contain.text', 'Setting')
    });

    it('should have a email input', function() {
          cy.findByPlaceholder('Email').should('have.value', this.user.email)
    });
})

