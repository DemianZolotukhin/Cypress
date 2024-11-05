interface User {
    email: string;
    password: string;
    username: string;
}
declare namespace Cypress {
    interface Chainable<Subject> {
        findByPlaceholder(placeholder: string): Chainable<any>
        assertPageUrl(url: string): Chainable<User>
        registerNewUser(): Chainable<any>
        login(user: User): Chainable<any>
    }
}