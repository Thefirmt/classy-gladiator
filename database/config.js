const { Pool} = require('pg');

const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'classy',
    password: 'password',
    port: 5433,
  });

module.exports = pool