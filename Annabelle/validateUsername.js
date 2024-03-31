function validateUsername(username) {
    const validLength = username.length >= 6;
    let hasLetter = /[a-zA-z]/g.test(username);
    let hasNumber = /[0-9]/g.test(username);

    return hasNumber && hasLetter && validLength;
}

module.exports = validateUsername;