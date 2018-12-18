import React, { Component } from 'react';
import initialData from '../data/users.json';
import Card from './card';
import NewUser from './newuser';
import Modal from './modal';

class Users extends Component {

  state = {
    users: initialData.slice(0, 4),
    // users: initialData,
    // startFrom: 3,
    isVisible: true,
    usersSearch: initialData.slice(0, 4),
    search: '',
    isOpen: false
  }

  handleSubmit = ( name, email, phone, role, picture ) => {
    const { users } = this.state;
    users.push({
      name: name,
      email: email,
      phone: phone,
      role: role,
      picture: picture
    })
    this.setState({
      users: users,
      usersSearch: users,
      isOpen: false
    })
  }

    handleLoadMore = () => {
    const { users, startFrom } = this.state;
    console.log("initial data length " + initialData.length)
    console.log("users length " + users.length)

    if ( users.length < initialData.length ) {
      users.push(initialData[users.length])
      // if (startFrom < initialData.length - 1 ) {
        // users.push(initialData[startFrom + 1])

        this.setState({
          users,
          usersSearch: users
          // startFrom: startFrom + 1
        })
  
    } else {
      this.setState({
        isVisible: false,
        usersSearch: users
      })
    }

  }

  handleSearch = (event) => {
  const { users } = this.state;

    const result = users.filter((user,index) => {
      let userName = user.name.toUpperCase();
      let userRole = user.role.toUpperCase();
      let userEmail = user.email.toUpperCase();
        if (userName.includes(event.target.value.toUpperCase()) || userRole.includes(event.target.value.toUpperCase()) || userEmail.includes(event.target.value.toUpperCase())){
          user.index= index;
          return user;    
        }
       return result;
    })
    this.setState({
      search: event.target.value,
      usersSearch: result,
    })
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { users, isVisible, search, usersSearch } = this.state;

    return (
      <React.Fragment>
          <button onClick={this.toggleModal}>Add new Users</button>
          <Modal show={this.state.isOpen} onClose={this.toggleModal}>
            <NewUser data={users} onSubmit={this.handleSubmit} />
          </Modal>
        <div className="search-navbar">
          <h1>Search</h1>
          <div className="search-bar">Search: <input  className="form-input" type="search" name="search" value={search} onChange={this.handleSearch}/></div>
        </div>
            {usersSearch.map((user, index) => {
              return <div key={index}>
                      <Card data={user} key={index} />
                    </div>
            } )}  
        { isVisible ? <button onClick={this.handleLoadMore}>Load More</button> : <React.Fragment></React.Fragment> }
      </React.Fragment>
    )
  }
}


export default Users;
