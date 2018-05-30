import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { connect } from '../DropdownContext';

import './DropdownButton.css';

const DropdownButton = ({ children, className, onOpen }) => (
  <button onClick={onOpen} className={classnames('dropdown-button', className)}>
    {children}
  </button>
);

DropdownButton.propTypes = {
  children: PropTypes.node.isRequired,
  onOpen: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default connect(DropdownButton);
