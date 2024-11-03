const { faker } = require('@faker-js/faker');
 
function generateUser() {
    // const randomNumber = Math.trunc((Math.random() * (1000 - 1 + 1) + 1)).toString();
    const username = 'A' + faker.internet.username()
    const email = faker.internet.email();
    const password = faker.internet.password();

    return { username, email, password }
}


module.exports = { generateUser }