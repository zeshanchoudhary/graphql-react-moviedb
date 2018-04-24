const fetch = require('node-fetch');

const popularMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=d766608f7a1db3ee08aad9e0ff4707aa&language=en-US&page=1';

function getMovieList(){
    return fetch(popularMoviesUrl)
        .then((response) => response.json())
        .then((data) => {
            return data.results;
    });
} 

module.exports = {
  getMovieList   
}