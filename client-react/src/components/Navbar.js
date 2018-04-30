import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {

    filterMovies = () => {
        console.log('filtering', this.filterText.value);
        const filteredMovies = this.props.movies.filter((movie) => {
            return movie.title.indexOf(this.filterText.value) !== -1;
        })
        this.props.filter(filteredMovies);
    }
    
    render(){
        return (
            <nav className="main-nav">
                <div className="branding">   
                    <p>MOVIE DB</p>
                </div>
                <div className="search-rest">
                    <i className="fas fa-search">
                    <input ref={(node) => this.filterText = node} 
                        onChange={this.filterMovies} type="text" placeholder="Search movies" /></i>
                </div>
            </nav>
        )
    }
}

export default Navbar;