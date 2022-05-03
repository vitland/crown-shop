import React from 'react';
import './button.styles.scss'

const BUTTON_STYLES_CLASS = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

export const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_STYLES_CLASS[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
