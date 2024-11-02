function generateUser() {
    const randomNumber = Math.trunc((Math.random() * (1000 - 1 + 1) + 1)).toString();
    const username = `test_user_${randomNumber}`;
    const email = `${username}@gmail.com`;
    const password = '1234567'

    return { username, email, password }
}


module.exports = { generateUser }