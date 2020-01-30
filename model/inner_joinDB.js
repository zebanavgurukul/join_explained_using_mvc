const knex = require("../knexFile");

let data_post = (post_data) => {
    return knex('movies').insert(post_data)
};

let get_dat = (movies_id) => {
    return knex('movies')
    .innerJoin('orders','movies.movies_id', '=', 'orders.movies_id')
    .select('*')
    .where("movies.movies_id",movies_id)
};

module.exports = {data_post,get_dat}

