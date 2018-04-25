
const graphql = require('graphql');

const { 
    GraphQLObjectType,
    GraphQLSchema,
} = graphql;

const queries = require('./queries/queries');


const RootType = new GraphQLObjectType({
    name: 'RootType',
    fields: () => ({
        ...queries
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
