import React, { Component } from 'react';
import Modal from './modal';

class EditUser extends Component {

  state = {
    name: this.props.data.name,
    email: this.props.data.email,
    phone: this.props.data.phone,
    isOpen: false
  }
  
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleEdit = (event) => {
    event.preventDefault();
    const { name, email, phone } = this.state;
    if (!name || !email) {
      this.setState({
        alert: 'Name or email cannot be empty.'
      })
    } else {
      this.props.onCallback(this.props.index, name, email, phone, this.props.data.role, this.props.data.picture)
      this.setState({
        name: name,
        email: email,
        phone: phone,
        isOpen: false
      })
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { name, email, phone, alert } = this.state;
    return (
      <React.Fragment>
        <div className="edit-button" onClick={this.toggleModal}><img className="img-navbar" src={process.env.PUBLIC_URL + 'settings-icon.png'} alt='edit user'/></div>
        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          <form className="form-container" onSubmit={this.handleEdit}>
            <div>
              <p>Name</p>
              <input className="form-input-modal" type="text" name="name" value={name}  onChange={this.handleInput}></input>
            </div>
            <div>
              <p>Email</p>
              <input className="form-input-modal" type="email" name="email" value={email}  onChange={this.handleInput}></input>
            </div>
            <div>
              <p>Phone</p>
              <input className="form-input-modal" type="phone" name="phone" value={phone} onChange={this.handleInput}></input>
            </div>
            <div><button  className="form-input-button" type="submit" value="submit form">Submit</button></div>
          </form>
          { alert ? <h1 className="alert-warning">{alert}</h1>: <div></div>}
        </Modal>   
      </React.Fragment>
    )
  }
}

export default EditUser;
