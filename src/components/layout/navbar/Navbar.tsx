import * as React from 'react';
import { StyledNav, StyledNavTitle, StyledNavList } from './Styles.nav';
import LargeNavList from './LargeNavList';

interface P {

}

const NavBar: React.FC<P> = () => {
  let a;
  return (
    <>
      <StyledNav>
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
      </StyledNav>
    </>
  );
};
export default NavBar;
