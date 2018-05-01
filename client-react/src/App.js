import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route } from "react-router-dom";

// componets 
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import Home from './components/Home';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <MuiThemeProvider>
            <BrowserRouter>
              <div>
                {/* <Navbar /> */}
                <Route exact path="/" component={MovieList} />
                <Route path="/new" component={Home} />
                <Route path="/movie/:id" component={Movie} />
              </div>
            </BrowserRouter>
          </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
