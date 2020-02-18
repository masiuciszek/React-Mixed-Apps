import styled from 'styled-components';


export const StyledMeal = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  justify-content:center;
  section:nth-child(1){
    letter-spacing: .1rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.white};
  }
`;

export const StyledSearchBar = styled.input`
  width: 20%;
  margin: 4rem 0;
  padding: .3rem .7rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  transition: ${({ theme }) => theme.transition.mainTransition};
  font-size: 1.3rem;
  letter-spacing: .1rem;
  text-transform: capitalize;
  &:active{
    background: ${({ theme }) => theme.colors.danger};
  }
  &:focus{
    background: ${({ theme }) => theme.colors.danger};
    box-shadow: ${({ theme }) => theme.shadow.darkShadow};
    color: ${({ theme }) => theme.colors.white};
    border: 3px solid ${({ theme }) => theme.colors.primary};
    width: 70%;
  }
`;
