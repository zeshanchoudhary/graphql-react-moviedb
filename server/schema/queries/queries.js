const graphql = require('graphql');
const fetch = require('node-fetch');
const {
    GraphQLList
} = graphql;

const MovieType = require('../types/MovieType');
const { getMovieList } = require('../movies-calls');

const getMovies = {
    type: new GraphQLList(MovieType),
    resolve(parentValue, args){
        return getMovieList();
    }
}

module.exports = {
    getMovies
};