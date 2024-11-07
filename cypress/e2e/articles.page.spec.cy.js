
describe('Articles', () => {
    beforeEach(() => {
        cy.registerAndLoginUser().as('user')

        cy.visit('/editor')
    })

    it('should allow to create a new article', () => {
        cy.findByPlaceholder('Article Title')
         .type('First Article');

        cy.findByPlaceholder(`What's this article about?`)
         .type('First Article');

        cy.findByPlaceholder('Write your article (in markdown)')
         .type('First Article');

        cy.get('.btn').click();
    });
});