const knex = require("../knexFile");

let post_orders = (post) => {
    return knex('orders').insert(post)
};

let get_left = (order_id) => {
    return knex('orders')
    .leftJoin('movies','orders.movies_id', '=', 'movies.movies_id')
    .select('orders.order_id','created_on','total_amount','comments','movies.movies_id')
    .where("orders.order_id",order_id)
};


module.exports = {post_orders,get_left}
