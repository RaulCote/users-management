import React, { Component } from 'react'

class LoadButton extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.clicked}>{this.props.children}</button>
      </React.Fragment>
    )
  }
}

export default LoadButton
