import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      // display: 'flex',
      // alignItems: 'center',
      // flexWrap: 'wrap',
      // justifyContent: 'center'
      // padding: 50
    };

//     display: flex;
// align-items: center;
// justify-content: center;
// flex-wrap: wrap;

    return (
      <div className="backdrop" style={backdropStyle} onClick={this.props.onClose}>
        <div className="modal" style={modalStyle}>
          {this.props.children}

          <div className="footer">
            <button className="modal-close-btn" onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;