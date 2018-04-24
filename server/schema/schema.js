
const graphql = require('graphql');

const { 
    GraphQLObjectType,
    GraphQLSchema,
} = graphql;

const { getMovies } = require('./queries/queries');


const RootType = new GraphQLObjectType({
    name: 'RootType',
    fields: () => ({
        getMovies
    }),
});

// const RootMutations = new GraphQLObjectType({
//     name: 'RootMutations',
//     fields: () => ({

//     }),
// });

// Schema 
module.exports = new GraphQLSchema({
    query: RootType,
    // mutation: RootMutations,
});
