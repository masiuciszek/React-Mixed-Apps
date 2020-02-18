/* eslint-disable @typescript-eslint/interface-name-prefix */
import styled from 'styled-components';


interface IHeading {
  color?: string;
  size?: string;
}

export const StyledTitle = styled.div`
  padding: 1rem;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledHeading = styled.h3<IHeading>`
  padding: .5rem;
  color: ${({ theme, color }) => (color || theme.colors.white)};
  font-size: ${({ size }) => (size || '5rem')};
`;
