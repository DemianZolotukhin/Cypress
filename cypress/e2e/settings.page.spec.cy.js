describe('Settings page', () => {
    beforeEach(() => {
        cy.visit('/user/login');

        // cy.intercept('POST', '/api/users/login').as('login')
        cy.registerNewUser().then(({ email, password }) => {
            cy.request('POST', 'https://conduit.mate.academy/api/users/login', {
                user: {
                    email,
                    password
                }
            }).then((response) => {
                cy.setCookie('auth', response.body.user.token)
            })
        })

        // cy.wait('@login')

        cy.visit('/settings');
    })

    it('should have a correct title', () => {

        // cy.get('h1');

        // cy.should('contain.text', 'Setting')
    });
})