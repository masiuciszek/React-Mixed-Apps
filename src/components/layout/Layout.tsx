/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styled/theme';
import GlobalStyles from './GlobalStyles';

interface P {
  children: React.ReactNode;
}

const Layout: React.FC<P> = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main className="mainApp">{children}</main>
    </ThemeProvider>
  </>
);
export default Layout;
