/* eslint-disable @typescript-eslint/interface-name-prefix */
import styled from 'styled-components';

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
`;

export const FlexWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
`;


export const FlexTitle = styled.div`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const FlexText = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;
