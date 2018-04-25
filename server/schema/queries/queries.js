const graphql = require('graphql');
const fetch = require('node-fetch');
const {
    GraphQLList,
    GraphQLInt,
} = graphql;

const MovieType = require('../types/MovieType');
const { getMovieList, getSingleMovie } = require('../movies-calls');

const getMovies = {
    type: new GraphQLList(MovieType),
    resolve(parentValue, args){
        return getMovieList();
    }
}

const getMovie = {
  type: MovieType,
  args: {
    id:  { type: GraphQLInt }
  },
  resolve(parentValue, args){
      return getSingleMovie(args.id);
  }
}

module.exports = {
    getMovies,
    getMovie
};