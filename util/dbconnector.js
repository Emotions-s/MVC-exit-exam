const knex = require('knex');

// connect database
const db = knex.default({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Est240930$',
        port: 3306,
        database: 'mvc_exit_exam',
    },
});

// check
db.raw("SELECT VERSION()").then(() => {
    console.log(`connection to db successful`);
})

module.exports = db;