const express = require('express');
const app = express();
const PORT = 3455;
const crypto = require('crypto')


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
        salt:salt,
        passwordHash:value
    };
};

function saltHashPassword(userpassword) {
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var passwordData = sha512(userpassword, salt);
    console.log('UserPassword = '+userpassword); //This is the input password from the user.
    console.log('Passwordhash = '+passwordData.passwordHash); //Store this as the password
    console.log('nSalt = '+passwordData.salt); //Store this as the salt
}

//Get username info from database
//Get User hashpassword and salt
//Call the sha512 function on user input password with the saved salt from the database.
//Compare the result to the user saved hashed password, if it matches, log in. -->User = Usernumber, Get all the data for user.


saltHashPassword('MYPASSWORD');
saltHashPassword('MYPASSWORD');

app.use(express.static('public'))


app.listen(PORT, () => console.log(`listening on port ${PORT}`))