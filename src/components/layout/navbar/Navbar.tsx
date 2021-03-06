/* eslint-disable import/extensions */
import * as React from 'react';
import {
  StyledNav, StyledNavTitle, StyledNavList, MenuIcon,
} from './Styles.nav';
import LargeNavList from './LargeNavList';
import SmallList from './SmallList';
import useToggle from '../../../hooks/useToggle';

interface P {

}

const NavBar: React.FC<P> = () => {
  const [show, toggleFn] = useToggle(false);
  return (
    <>
      <StyledNav>
        <MenuIcon onClick={toggleFn}>
          <span>Hamburger</span>
        </MenuIcon>
        <StyledNavTitle>
          <h4>
            React
            {' '}
            <span>API</span>
            {' '}
            App
            {' '}
          </h4>
        </StyledNavTitle>
        <LargeNavList />
        {show && <SmallList />}
      </StyledNav>
    </>
  );
};
export default NavBar;
