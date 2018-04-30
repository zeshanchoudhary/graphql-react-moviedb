import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render(){
        return (
            <nav className="main-nav">
                <div className="branding">   
                    <p>MOVIE DB</p>
                </div>
                <div className="search-rest">
                    <i className="fas fa-search">
                    <input type="text" placeholder="Search movies" /></i>
                </div>
            </nav>
        )
    }
}

export default Navbar;