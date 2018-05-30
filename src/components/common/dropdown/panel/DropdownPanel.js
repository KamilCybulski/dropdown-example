import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { connect } from '../DropdownContext';

import './DropdownPanel.css';

class DropdownPanel extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
  }

  componentDidUpdate() {
    const { isOpen } = this.props;

    if (isOpen) {
      document.addEventListener('click', this.handleClick);
    } else {
      document.removeEventListener('click', this.handleClick);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick = evt => {
    if (!this.panel.contains(evt.target)) {
      this.props.onClose();
    }
  }


  render () {
    const { children, isOpen, onClose } = this.props;

    return (
      <div
        className={classnames('dropdown-panel', {
          'dropdown-panel--visible': isOpen
        })}
        ref={node => this.panel = node}
      >
        {children}
      </div>
    )
  }
}

export default connect(DropdownPanel);
