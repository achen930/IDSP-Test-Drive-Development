function validateUsername(username) {        //angus: we would likely also check if a username already exists 
    const validLength = username.length >= 6;    //angus: maybe in actual implementation 6 character minimum is too long
    let hasLetter = /[a-zA-z]/g.test(username);
    let hasNumber = /[0-9]/g.test(username);

    return hasNumber && hasLetter && validLength;
}

module.exports = validateUsername;
