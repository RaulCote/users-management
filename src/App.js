import React, { Component } from 'react';
import './App.css';
import Users from './components/users';
import NavBar from './components/navbar';
import SideBar from './components/sidebar';


class App extends Component {

  render() {
    return (
      <div className="App">
            <NavBar />
            <SideBar />
            <Users /> 
      </div>
    );
  }
}

export default App;
