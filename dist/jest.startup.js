"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jestCli = require("jest-cli");
const server_1 = require("./server/server");
const enviroment_1 = require("./common/enviroment");
const users_router_1 = require("./users/users.router");
const reviews_router_1 = require("./reviews/reviews.router");
const users_model_1 = require("./users/users.model");
const reviews_model_1 = require("./reviews/reviews.model");
const restaurants_model_1 = require("./restaurants/restaurants.model");
const restaurants_router_1 = require("./restaurants/restaurants.router");
let server;
const beforeAlltests = () => {
    enviroment_1.enviroment.db.url = process.env.DB_URL || 'mongodb://localhost/meat-api-test-db';
    enviroment_1.enviroment.server.port = process.env.SERVER_PORT || 3001;
    server = new server_1.Server();
    return server.bootstrap([
        users_router_1.usersRouter,
        reviews_router_1.reviewsRouter,
        restaurants_router_1.restaurantsRouter
    ])
        .then(() => users_model_1.User.remove({}).exec())
        .then(() => reviews_model_1.Review.remove({}).exec())
        .then(() => restaurants_model_1.Restaurant.remove({}).exec());
};
const afterAllTests = () => {
    return server.shutdown();
};
beforeAlltests()
    .then(() => jestCli.run())
    .then(() => afterAllTests())
    .catch(console.error);
