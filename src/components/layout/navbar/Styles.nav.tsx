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
  display: flex;
  letter-spacing: .1rem;
  justify-content: flex-end;
  margin-left: auto;
  padding: 1rem;
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
`;

export const StyledNavListSmall = styled.ul`

`;
