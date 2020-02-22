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

export const fade = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
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

export const rotateForever = keyframes`

0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;


export const grow = keyframes`
0% {
    width: 0%
  }
  10% {
    width: 10%
  }
  20% {
    width: 20%
  }
  30% {
    width: 30%
  }
  40% {
    width: 40%
  }
  50% {
    width: 50%
  }
  60% {
    width: 60%
  }
  70% {
    width: 70%
  }
  80% {
    width: 80%
  }
  90% {
    width: 90%
  }
  100% {
    width: 100%
  }

`;
