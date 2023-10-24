import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import  {typeDefs}  from './server/type-defs.js';
import { resolvers}  from './server/resolver.js';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port : 4000 },
})

console.log(`Server is ready at: ${url}`)