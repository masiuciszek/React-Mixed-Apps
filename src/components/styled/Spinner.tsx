/* eslint-disable import/extensions */
import * as React from 'react';
import styled from 'styled-components';
import { rotateForever } from './animations';

interface P {

}

const Spinner: React.FC<P> = () => (
  <StyledSpinner />
);

export const StyledSpinner = styled.div`
  position: absolute;
  top: 35%;
  left: 64%;
  transform: translate(-50%, 0);
  animation-duration: 0.75s;
  animation-iteration-count: infinite;
  animation-name: ${rotateForever};
  animation-timing-function: linear;
  height: 60px;
  width: 60px;
  border: 8px solid #333;
  border-right-color: transparent;
  border-radius: 50%;
  display: inline-block;
`;


export const InnerSpinner = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;


export default Spinner;
