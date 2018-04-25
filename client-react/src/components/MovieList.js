import React from 'react';
import { graphql } from 'react-apollo';
import { getMovies } from '../queries/queries';
import { Link } from 'react-router-dom';
// material UI things
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import CircularProgress from 'material-ui/CircularProgress';

class MovieList extends React.Component {
  displayMovies(){
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      circular: {
        marginLeft: '50%',
      },
    };

    const data = this.props.data;
    if(data.loading){
        return (
            <CircularProgress style={styles.circular} size={80} thickness={5} /> 
        )
    } else {
      return(
        <div className="container">
          <GridList
            cellHeight={400}
            cols={4}
            padding={25}
          >
            <Subheader>Popular Movies</Subheader>
            {this.props.data.getMovies.map((movie) => (
              <Link to={`movie/${movie.id}`}>
                  <GridTile
                    className="grid-tile"
                    key={movie.id}
                    title={movie.title}
                  >
                    <img alt="movie" src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                  </GridTile>
              </Link>
            ))}
          </GridList>
        </div>
      )
    }
  }


  render(){
    
    console.log(this.props);
    return(
      <div>
        { this.displayMovies() }
      </div>
    );
  }
}
export default graphql(getMovies)(MovieList);