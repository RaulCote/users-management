import React, { Component } from 'react';
import './App.css';
import Users from './components/users';
import NavBar from './components/navbar';


class App extends Component {

  render() {
    return (
      <div className="App">
            <NavBar />
            <Users /> 
      </div>
    );
  }
}

export default App;
