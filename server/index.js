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
    let psw = req.query.pass
    let username = [req.query.user]
    let text = "SELECT * FROM users WHERE name = $1"
    pool.query(text, username)
    .then(function (data2) {
        if (data2.rows[0].pass === psw) {
          console.log('User: ', data2.rows[0].name, ' Authentication Success!')
          let userInfo = {
            'name': data2.rows[0].name,
            'class': data2.rows[0].class,
            'weapon': data2.rows[0].weapon,
            'armor': data2.rows[0].armor,
            'room': data2.rows[0].room
          }
          res.status(200).send(userInfo)
        } else {
          res.status(400).send('Incorrect password')
        }
    })
    .catch(e => console.log(e.stack))
})

//check for duplicate usernames

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



app.get('/starterClasses', (req, res) => {
  let starterClasses = [8]
  let text = "SELECT * FROM classes WHERE id <= $1"
  pool.query(text, starterClasses)
  .then(function (classes){
  res.status(200).send(classes)
  })
})



app.get('/starterWeapons', (req, res) => {
  let starterWeapons = [8]
  let text = "SELECT * FROM weapons WHERE id <= $1"
  pool.query(text, starterWeapons)
  .then(function (weapons){
    res.status(200).send(weapons)
  })
})

app.use(express.static('public'))


app.listen(PORT, () => console.log(`listening on port ${PORT}`))