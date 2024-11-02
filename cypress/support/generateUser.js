const { faker } = require('@faker-js/faker');
 
function generateUser() {
    const randomNumber = Math.trunc((Math.random() * (1000 - 1 + 1) + 1)).toString();
    const username = faker.internet.userName();
    const email = faker.internet.email();
    const password = '1234567'

    return { username, email, password }
}


module.exports = { generateUser }