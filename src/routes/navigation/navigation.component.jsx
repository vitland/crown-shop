import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/logo.svg';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsVisible } from '../../store/cart/cart.selector';

import { SignOutUser } from '../../utils/firebase/firebase.utils';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

export const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);

  const  isVisible  = useSelector(selectIsVisible)

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as={'span'} onClick={SignOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isVisible && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
