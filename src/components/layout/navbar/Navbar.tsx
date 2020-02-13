/* eslint-disable import/extensions */
import * as React from 'react';
import { MenuAltRight } from 'styled-icons/boxicons-regular/MenuAltRight';
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
          <MenuAltRight size="37" />
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
