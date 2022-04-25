const { Pool, Client } = require('pg')


module.exports = {
    connection: function() {

        const pool = new Pool({
            user: 'pfe',
            host: 'localhost',
            database: 'lawyers',
            password: 'pfe',
            port: 5432,
          })
          pool.connect()

    }
}
