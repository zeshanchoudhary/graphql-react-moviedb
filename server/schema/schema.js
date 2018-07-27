var graphql = require('graphql');

var { GraphQLObjectType, GraphQLSchema } = graphql;

var queries = require('./queries/queries');

var getMovies = queries.getMovies;

var getMovie = queries.getMovie;

var RootType = new GraphQLObjectType({
  name: 'RootType',
  fields: () => ({
    getMovies,
    getMovie
  })
});

// var RootMutations = new GraphQLObjectType({
//     name: 'RootMutations',
//     fields: () => ({

//     }),
// });

// Schema
module.exports = new GraphQLSchema({
  query: RootType
  // mutation: RootMutations,
});
