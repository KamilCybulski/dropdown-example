import React from 'react';
import PropTypes from 'prop-types';

import Context from './DropdownContext';

class DropdownContainer extends React.Component {
  static propTypes = {
    component: PropTypes.func.isRequired
  }

  state = {
    isOpen: false
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { component: Component, ...restProps } = this.props;

    return (
      <Context.Provider
        value={{ ...this.state, handleClose: this.handleClose, handleOpen: this.handleOpen }}
      >
        <Component {...restProps} />
      </Context.Provider>
    );
  };
}

export default DropdownContainer;
