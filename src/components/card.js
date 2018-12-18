import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div>
        <img className="card-image" src={this.props.data.picture} alt={this.props.data.name} />
        <p>{this.props.data.name}</p>
        <p>{this.props.data.email}</p>
        <p>{this.props.data.role}</p>
        <button>Edit Button</button>
      </div>
    )
  }
}

export default Card;
