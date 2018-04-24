const graphql = require('graphql');

const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLFloat,
} = graphql;

module.exports = new GraphQLObjectType({
    name: 'MovieType',
    fields: () => ({
        id: { type: GraphQLInt },
        vote_count: { type: GraphQLInt },
        vote_average: { type: GraphQLFloat },
        title: { type: GraphQLString },
        poster_path: { type: GraphQLString },
        overview: { type: GraphQLString },
    }),
});