var knex = require("knex")({
    client: 'mysql',
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "navgurukul",
        database: "joins"
    },
    useNullAsDefault: true
});
module.exports = knex;

knex.schema.hasTable('movies').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('movies', (table) => {
            table.increments('movies_id')
            table.string('movies_name')
            table.integer('movies_year')
            table.string('movies_url')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
})

knex.schema.hasTable('orders').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('orders', (table) => {
            table.increments('order_id')
            table.string('created_on')
            table.integer('total_amount')
            table.string('comments')
            table.integer('movies_id')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
})

knex.schema.hasTable('songs').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('songs', (table) => {
            table.increments('songs_id')
            table.string('songs_name')
            table.integer('songs_year')
            table.string('songs_url')
            table.integer('total_amount')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
})