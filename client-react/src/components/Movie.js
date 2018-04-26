import React from 'react';
import { graphql } from 'react-apollo';
import { getMovie } from '../queries/queries';
import styled from 'styled-components';

class Movie extends React.Component {

  render(){
    const MovieBackground = styled.div`
      width: 100%;
      height: 800px;
      background-image: url(${props => props.backdrop});
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `;

      const data = this.props.data;
      if(data.loading){
        return <h4>Loading...</h4>
      } else {
        const movie = data.getMovie;
        console.log(`http://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`);
        return (
          <MovieBackground backdrop={`http://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} className="main">
            <div className="image-container">
              <img alt="poster" src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
            </div>
            <div className="content">
              <h2>{movie.title}</h2>
              <h4>Overview</h4>
              <p>{movie.overview}</p>
            </div>
          </MovieBackground>
        )
      }
  }

}

export default graphql(getMovie, {
  options: (props) => { return { variables: { id: props.match.params.id }}}, // passing the id variable
})(Movie);
