const { Pool } = require("pg")

module.exports = new Pool({

    user: 'postgres',
    password: 'e77540ae54f74e22a8ed58a34bc99cf4',
    host: 'localhost',
    port: 5432,
    database: 'foodfy'
})