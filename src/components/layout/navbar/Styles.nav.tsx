import styled from 'styled-components';


export const StyledNav = styled.nav`
  padding: 1.2em .4em;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.offWhite};
  display:flex;
  align-items:center;
`;

export const StyledNavTitle = styled.div`
padding: .3em;
  h4{
    font-size: 2em;
    letter-spacing: .1rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.danger};
    width: 12rem;
    span {
      color: ${({ theme }) => theme.colors.danger};
    }
  }

`;
export const StyledNavList = styled.ul`
  letter-spacing: .1rem;
  justify-content: flex-end;
  margin-left: auto;
  padding: 1rem;
  display: none;
  li {
    padding: .3em;
    a{
      color: ${({ theme }) => theme.colors.offWhite};
      font-size: 1.6em;
      text-transform: uppercase;
      padding: 0 .3em;
      transition: ${({ theme }) => theme.transition.mainTransition};
      position: relative;
      &:hover{
        color: ${({ theme }) => theme.colors.danger};
        &::after{
          content: '';
          width: 100%;
          height: .1rem;
          background: #fff;
          position: absolute;
          bottom: -1rem;
          left:0;
        }
      }
    }
  }
  @media(min-width: 940px){
    display: flex;
  }
`;

export const StyledNavListSmall = styled.ul`
   @media(min-width: 940px){
    display: none;
  }
  text-align:center;
  align-items:center;
  position: fixed;
  width: 100vw;
  min-height: 300vw;
  z-index: 4;
  left: 50%;
  transform: translate(-50%, 0);
  top: 0;
  background: rgba(0,0,0,0.4);
  li{
    font-size: 3rem;
    padding: 3rem 0;
    transition: ${({ theme }) => theme.transition.mainTransition};
    a{
      font-size: 2.5rem;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.white};
      transition: ${({ theme }) => theme.transition.mainTransition};
      letter-spacing: .2rem;
      &:hover{
        color: ${({ theme }) => theme.colors.danger};
        border-bottom: 1px solid ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const MenuIcon = styled.span`
  position: absolute;
  top: .4rem;
  right: 1rem;
  cursor: pointer;
  z-index: 6;
  svg{
    color: ${({ theme }) => theme.colors.white};
  }
  @media(min-width: 940px){
    display: none;
  }
`;
