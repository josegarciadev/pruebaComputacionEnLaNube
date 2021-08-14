import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql'
/*import {PingResolver} from './api/resolvers/ping'*/
import {Resolvers} from './api/resolvers/'

export async function startServer(){

    const app = express();

    const server = new ApolloServer({

        schema: await buildSchema({
            resolvers: Resolvers,
            validate: false
        }),
        context: ({req, res}) => ({req, res})
    })

    await server.start();
    server.applyMiddleware({app, path: '/api'});
    app.set('port',process.env.PORT || 3100);
    return app;
}

