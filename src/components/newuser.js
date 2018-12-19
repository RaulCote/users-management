import React, { Component } from 'react';


class NewUser extends Component {

  state = {
    name: '',
    email: '',
    phone: '',
    role: 'User',
    picture: 'http://placehold.it/32x32',
    alert: ''
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone, role, picture } = this.state;
    if (!name || !email) {
      this.setState({
        alert: 'Name or email cannot be empty.'
      })
    } else {
      this.props.onSubmit(name, email, phone, role, picture)
      this.setState({
        name: '',
        email:'',
        phone:''
      })
    }
  }

  render() {
    const { name, email, phone, alert } = this.state;
    
    return (
      <React.Fragment>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <div>
            <p>Name</p>
            <input className="form-input-modal" type="text" name="name" value={name} onChange={this.handleInput}></input>
          </div>
          <div>
            <p>Email</p>
            <input className="form-input-modal" type="email" name="email" value={email} onChange={this.handleInput}></input>
          </div>
          <div>
            <p>Phone</p>
            <input className="form-input-modal" type="phone" name="phone" value={phone} onChange={this.handleInput}></input>
          </div>
          <div><button className="form-input-button" type="submit" value="submit form">Submit</button></div>
        </form>
        { alert ? <h1 className="alert-warning">{alert}</h1> : <div></div>}
      </React.Fragment>
    )
  }
}

export default NewUser;
