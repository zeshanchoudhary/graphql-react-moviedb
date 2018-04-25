const fetch = require('node-fetch');

const popularMoviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=d766608f7a1db3ee08aad9e0ff4707aa&language=en-US&page=1';

const urlImage = "http://image.tmdb.org/t/p/w185//jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg";

function getMovieList(){
    return fetch(popularMoviesUrl)
        .then((response) => response.json())
        .then((data) => {
            return data.results;
    });
} 

function getSingleMovie(id){
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d766608f7a1db3ee08aad9e0ff4707aa&language=en-US`)
      .then((response) => response.json())
      .then((data) => data);
}

module.exports = {
  getMovieList,   
  getSingleMovie,
}