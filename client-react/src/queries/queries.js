import gql from 'graphql-tag';

const getMovies = gql`
  {
    getMovies{
      id
      title
      poster_path
    }
  }
`;

const getMovie = gql`
  query getMovie($id: Int!){
    getMovie(id: $id){
      id
      vote_count
      title
      overview
      poster_path
      backdrop_path
    }
  }
`

export {
  getMovies,
  getMovie
}