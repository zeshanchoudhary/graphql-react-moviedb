import React from 'react';
import { graphql } from 'react-apollo';
import { getMovie } from '../queries/queries';
import styled from 'styled-components';

class Movie extends React.Component {
  
  render(){
    const MovieBackground = styled.div`
      background-image: url(${props => props.backdrop});
      width: 100%;
      height: 800px;
      background-size: cover;
      position: relative;
      display: flex;
      flex-direction: column;
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
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
          </MovieBackground>
        )
      }
  }

}

export default graphql(getMovie, {
  options: (props) => { return { variables: { id: props.match.params.id }}}, // passing the id variable
})(Movie);