/* eslint-disable @typescript-eslint/interface-name-prefix */
import styled from 'styled-components';
import { flexRotate } from '../styled/animations';

interface IStyledHome {
  backgroundUrl: string;
}

export const StyledHome = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  display: -webkit-flex; /* Safari */
  display: flex;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

`;

export const StyledHomeBox = styled.div<IStyledHome>`
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.mainTransition};
  background-image: url(${(props) => props.backgroundUrl});
  justify-content: center;
  align-items:center;
  height: 100%;
  position: relative;
  @media screen and (max-width: 768px) {
    overflow: auto;
    overflow-x: hidden;
    p{
      font-size: 2em;
    }

}

  &:hover{
    flex-grow: 3;
  }

   background-size: cover;
    background-position: center center;
    background-attachment: fixed;

    &::after{
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.colors.darkRGBA};
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
`;

export const FlexWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* transform: rotate(90deg); */
  z-index: 2;
  position: relative;
  &:hover{

    @media(min-width:768px){
      h4{
        color: ${({ theme }) => theme.colors.danger};
        transform: rotate(-90deg);
        display: block;
      }
  }

    p,
    span,
    a
    {
      display: block;

    }
  }

`;


export const FlexTitle = styled.div`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.white};
  h4{
    text-transform: uppercase;
  }

  @media(min-width:768px){
    transform: rotate(90deg);
  }
`;

export const FlexText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  p,
  span,
  a
  {
    display: none;
    font-size: 1.4rem;
  }
  span {
    text-align: center;
    a{
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
