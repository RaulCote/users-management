import React, { Component } from 'react';
import initialData from '../data/users.json';
import NewUser from './newuser';
import Modal from './modal';
import EditUser from './edituser';

class Users extends Component {

  state = {
    users: initialData.slice(0, 4),
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

  handleEdit = ( index, name, email, phone, role, picture ) => {
    const { users } = this.state;
    users.splice(index, 1, {
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
    const { users } = this.state;

    if ( users.length < initialData.length ) {
      users.push(initialData[users.length])
        this.setState({
          users,
          usersSearch: users
        })
    } else {
      this.setState({
        usersSearch: users,
        isVisible: false
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
        <div className="new-users">
          <button className="primary-button" onClick={this.toggleModal}>Add new Users</button>
        </div>
          <Modal show={this.state.isOpen} onClose={this.toggleModal}>
            <NewUser data={users} onSubmit={this.handleSubmit} />
          </Modal>
        <div className="search-navbar">
          {/* <h1>Search</h1> */}
          <div className="search-bar"><input  className="form-input" type="search" name="search" placeholder="Search by username, email, role..." value={search} onChange={this.handleSearch}/></div>
        </div>
        <section className="users-container">
            {usersSearch.map((user, index) => {
              return <div className="card" key={index}>
                        <img className="card-image" src={user.picture} alt={user.name} />
                        <div className="user-text"><p>{user.name}</p></div>
                        <div className="user-text"><p>{user.email}</p></div>
                        <div className="user-text"><p>{user.role}</p></div>
                        <EditUser key={index} index={index} data={user} onCallback={this.handleEdit}  />
                     </div>
            } )}  
        </section>
        { isVisible ? <div className="load-button-container"><button className="primary-button" onClick={this.handleLoadMore}>Load More</button></div> : <React.Fragment></React.Fragment> }
        <div className="bottom-container"></div>
      </React.Fragment>
    )
  }
}


export default Users;
