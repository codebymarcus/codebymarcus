import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children, center = false }) => {
  const defaultClasses = 'fixed top-0 left-0 w-full h-full flex flex-col bg-gray-200';
  const centerClasses = 'flex items-center justify-center';

  return (
    <div id="main" className={`${defaultClasses} ${center ? centerClasses : ''}`}>
      {children}
    </div>
  );
};

Main.propTypes = {};

export default Main;
