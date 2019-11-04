const express = require('express');
const app = express();
const PORT = 3455;
const pool = require('../database/config.js')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/login', (req, res) => {
    let username = [req.query.user]
    let text = "SELECT * FROM users WHERE name = $1"
    pool.query(text, username)
    .then(function (data) {
        res.send(data.rows[0].salt)
    })
    .catch(e => console.log(e.stack))
})

app.get('/loginconfirm', (req, res) => {
    let psw = [req.query.info.psw]
    let salt = [req.query.info.salt]
    let username = [req.query.info.user]
    console.log(username)
    let text = "SELECT * FROM users WHERE name = $1"
    pool.query(text, username)
    .then(function (data2) {
        console.log(data2)
        // res.send(res.rows[0].salt)
    })
    .catch(e => console.log(e.stack))
})

//check for duplicate usernames
// app.get('/register', (req, res) => {
//     let username = req.body.name
//     pool.query(`SELECT * FROM users WHERE name = ${username}`)    
//       .then(res => res.send(res))
//       .catch(e => console.log(e.stack))
// })

app.post('/register', (req, res) => {
    let username = req.body.user;
    let password = req.body.psw;
    let salt =req.body.salt;
    ;(async () => {
        const client = await pool.connect()
        try {
          await client.query('BEGIN')
          const userQuery = "INSERT INTO users (name, salt, pass, class, weapon, armor, room) VALUES ($1, $2, $3, $4, $5, $6, $7)"
          const insertUser = [username, salt, password, null, null, null, 1]
          await client.query(userQuery, insertUser)
          await client.query('COMMIT')
        } catch (e) {
          await client.query('ROLLBACK')
          throw e
        } finally {
          client.release()
        }
      })().catch(e => console.error(e.stack))
      res.send('Account Created!')
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