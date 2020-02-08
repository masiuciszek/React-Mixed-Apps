import styled from 'styled-components';


export const StyledLink = styled.span`
  color: ${({ theme }) => theme.colors.white};
  padding: .4em .6em;
  border: 2px solid ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  transition: ${({ theme }) => theme.transition.mainTransition};
  text-transform: capitalize;
  letter-spacing: .1rem;
  border-radius: .3rem;
  &:hover{
    box-shadow: ${({ theme }) => theme.shadow.darkShadow};
      a{
        color: ${({ theme }) => theme.colors.danger};

      }
  }
`;

export const StyledBtn = styled(StyledLink)`

`;
