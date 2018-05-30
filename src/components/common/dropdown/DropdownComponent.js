import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './DropdownComponent.css';

const DropdownComponent = ({ children, className }) => (
  <div className={classnames('dropdown', className)}>
    {children}
  </div>
);

DropdownComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default DropdownComponent;
