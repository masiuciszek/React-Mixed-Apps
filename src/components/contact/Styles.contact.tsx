import styled, { css } from 'styled-components';

const BaseFlex = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: .6rem;
  width: 100%;
`;

export const StyledContact = styled.div`
  ${BaseFlex};
  height: 70vh;
  margin: 4rem 0;
`;


export const StyledSocialWrapper = styled.div`
  ${BaseFlex};
  flex-direction: row;
  justify-content: space-between;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  background: rgb(51,51,51);
  background: radial-gradient(circle, rgba(51,51,51,1) 0%, rgba(33,29,29,1) 54%, rgba(17,10,10,0.4990371148459384) 100%);
`;
export const StyledSocialItem = styled.section`
  padding: .4rem;
  transition: ${(props) => props.theme.transition.mainTransition};
  svg{
    color: ${(props) => props.theme.colors.white};
    transition: ${(props) => props.theme.transition.secondaryTransition};
  }

  &:hover{
    background: ${(props) => props.theme.colors.danger};
    transform: scale(1.1);
    svg{
      color: ${(props) => props.theme.colors.offWhite};
    }
  }

`;


export const StyledWebWrapper = styled.section`
  ${BaseFlex};
  flex-direction: row;
  justify-content:space-around;
  margin-top: 2rem;
  @media(max-width:759px){
    flex-direction: column;
  }
`;

export const StyledWebItem = styled.div`

  a{
    color: ${(props) => props.theme.colors.white};
  }
  h3{
      box-shadow: ${({ theme }) => theme.shadow.lightShadow};
      font-size: 1.8rem;
      text-transform: capitalize;
      padding:.5rem;
      background-image: -webkit-gradient(linear, left top, right top, color-stop(50%, #252525), color-stop(50%, #fee603));
      background-image: linear-gradient(to right, #252525 50%, ${(props) => props.theme.colors.danger} 50%);
      background-position: 0;
      background-size: 200%;
      -webkit-transition: all 0.4s;
      transition: all 0.4s;

    &:hover{
      background-position: -100%;
      box-shadow: ${({ theme }) => theme.shadow.darkShadow};
      transform: rotate(-4deg);
    }
  }

  @media(max-width:759px){
    margin: 1rem 0;
  }

`;
