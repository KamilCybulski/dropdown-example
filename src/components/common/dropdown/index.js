import React from 'react';

import DropdownComponent from './DropdownComponent';
import DropdownContainer from './DropdownContainer';
import DropdownButton from './button';
import DropdownPanel from './panel';

const Dropdown = props => <DropdownContainer component={DropdownComponent} {...props} />;

Dropdown.Panel = DropdownPanel;
Dropdown.Button = DropdownButton;

export default Dropdown;
