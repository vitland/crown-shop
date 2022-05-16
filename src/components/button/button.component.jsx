import React from 'react';
import { BaseButton, GoogleButton, InvertedButton } from './button.styles';

export const BUTTON_STYLES_CLASS = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_STYLES_CLASS.base) =>
  ({
    [BUTTON_STYLES_CLASS.base]: BaseButton,
    [BUTTON_STYLES_CLASS.google]: GoogleButton,
    [BUTTON_STYLES_CLASS.inverted]: InvertedButton,
  }[buttonType]);

export const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};
