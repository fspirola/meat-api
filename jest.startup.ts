import * as jestCli from 'jest-cli'

import {Server} from './server/server'
import {enviroment} from './common/enviroment'
import {usersRouter} from './users/users.router'
import {reviewsRouter} from './reviews/reviews.router'
import {User} from './users/users.model'
import {Review} from './reviews/reviews.model'
import {Restaurant} from './restaurants/restaurants.model'
import { restaurantsRouter } from './restaurants/restaurants.router';

let server: Server

const beforeAlltests = ()=> {
    enviroment.db.url = process.env.DB_URL || 'mongodb://localhost/meat-api-test-db'
    enviroment.server.port = process.env.SERVER_PORT || 3001
    server = new Server()
    return server.bootstrap([
        usersRouter,
        reviewsRouter,
        restaurantsRouter
    ])
    .then(()=>User.remove({}).exec())
    .then(()=>Review.remove({}).exec())
    .then(()=>Restaurant.remove({}).exec())
}

const afterAllTests = ()=>{
    return server.shutdown()
}

beforeAlltests()
.then(()=>jestCli.run())
.then(()=>afterAllTests())
.catch(console.error)