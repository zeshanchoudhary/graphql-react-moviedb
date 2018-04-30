import React from 'react';
import Navbar from './Navbar';
import MovieList from './MovieList';
import { graphql } from 'react-apollo';
import { getMovies } from '../queries/queries';
import './Home.css';

class Home extends React.Component {
    
    constructor(){
        super();
        this.state = {
            movies: [],
            filteredMovies: [],
        }
    }

    // componentWillReceiveProps(){
    //     const data = this.props.data;
    //     if(!this.props.data.loading){
    //         this.setState({
    //             movies: data.getMovies,
    //         });
    //     }
    //     console.log(this.state.movies);
    // }

    displayMovies(){
        const data = this.props.data;
        if(data.loading){
            return <p>Loading...</p>
        } else {
            // const movieList = data.getMovies.slice(10); 
            return data.getMovies.map(movie => {
                return (
                    <div key={movie.id} className="single-movie">   
                        <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} className="img-small" />
                        <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="img-big" />
                        <p>{movie.title}</p>
                    </div>
                );
            });
        }
    }

    handleClick() {
        console.log("clicked");
    }

    handleFilter(movies){
        console.log(movies);
    }
    
    
    render(){
        console.log(this.props);
        return (
            <div id="home">
                <Navbar movies={this.state.movies} filter={this.handleFilter} />
                <div className="left-section">
                    <ul className="lista">
                        <li className="lista-item" onClick={this.handleClick}>New Releases</li>
                        <li className="lista-item" onClick={this.handleClick}>Trending</li>
                        <li className="lista-item" onClick={this.handleClick}>Coming Soon</li>
                        <li className="lista-item" onClick={this.handleClick}>Favorites</li>
                        <li className="lista-item" onClick={this.handleClick}>Watch Later</li>
                    </ul>
                </div>

                <div className="main-section">
                    <h1>New Releases</h1>
                    <div className="movie-list">    
                        {this.displayMovies()}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default graphql(getMovies)(Home);