import { keyframes } from 'styled-components';


export const flexGrow = keyframes`

 {
  0% {
    -webkit-flex-grow: 1;
    flex-grow: 1;
  }
  50% {
    -webkit-flex-grow: 3;
    flex-grow: 3;
  }
  100% {
    -webkit-flex-grow: 1;
    flex-grow: 1;
  }
}

`;
export const flexRotate = keyframes`
0% {
    transform: rotate(90deg);
    top: 15%;
  }
  50% {
    transform: rotate(0deg);
    top: 15%;
  }
  100% {
    transform: rotate(90deg);
    top: 15%;
  }}

`;
