const crypto = require('crypto');

var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt: salt,
        psw: value
    };
};

function saltHashPassword(userpassword) {
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    return sha512(userpassword, salt);
    //console.log('UserPassword = '+userpassword); //This is the input password from the user.
    //console.log('Passwordhash = '+passwordData.passwordHash); //Store this as the password
    //console.log('nSalt = '+passwordData.salt); //Store this as the salt
}

module.exports = { genRandomString, sha512, saltHashPassword };