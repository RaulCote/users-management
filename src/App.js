import React, { Component } from 'react';
import './App.css';
import Users from './components/users';
import NavBar from './components/navbar';
import SearchBar from './components/searchbar';
import SideBar from './components/sidebar';


class App extends Component {

  render() {
    return (
      <div className="App">
            <NavBar />
            <SideBar />
            {/* <NewUser /> */}
            <SearchBar /> 
            <Users /> 
     
      </div>
    );
  }
}

export default App;
