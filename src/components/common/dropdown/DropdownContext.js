import React from 'react';
import PropTypes from 'prop-types';

const Context = React.createContext({});

const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

const ConnectedComponent = ({ component: Component, ...restProps }) => (
  <Context.Consumer>
    {
      context => (
        <Component
          isOpen={context.isOpen}
          onOpen={context.handleOpen}
          onClose={context.handleClose}
          {...restProps}
        />
      )
    }
  </Context.Consumer>
);

export const connect = component => {
  const connected = props => ConnectedComponent({ component, ...props });
  connected.displayName = `withDropdown(${getDisplayName(component)})`
  return connected;
}

export default Context;
