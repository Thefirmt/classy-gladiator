const express = require('express');
const app = express();
const PORT = 3455;
const crypto = require('crypto');
const pool = require('../database/config.js')


app.get('/login', (req, res) => {

})

app.post('/register', (req, res) => {
    req.params.user = username;
    req.params.psw = password;
    req.params.salt = salt;
    ;(async () => {
        const client = await pool.connect()
        try {
          await client.query('BEGIN')
          const userQuery = "INSERT INTO users (name, salt, pass, class, weapon, armor, room"
          const insertUser = [username, salt, password, null, null, null, 1]
          await client.query(bossesQuery, insertBosses)
          await client.query('COMMIT')
        } catch (e) {
          await client.query('ROLLBACK')
          throw e
        } finally {
          client.release()
        }
      })().catch(e => console.error(e.stack))
})

//receive username from client
//Get username salt from database
//send salt to client
//client runs salt and hash on user typed password
//send the hashed password to server
//check against the saved password in the database for user.
//if it matches, retrieve data for user.



//Get User hashpassword and salt
//Call the sha512 function on user input password with the saved salt from the database.
//Compare the result to the user saved hashed password, if it matches, log in. -->User = Usernumber, Get all the data for user.


// saltHashPassword('MYPASSWORD');
// saltHashPassword('MYPASSWORD');

app.use(express.static('public'))

// const res = await pool.query('SELECT NOW()')
// await pool.end()


app.listen(PORT, () => console.log(`listening on port ${PORT}`))