import styled from 'styled-components';
import { grow } from '../styled/animations';


export const StyledMeal = styled.div`
  padding: 3rem 0;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  justify-content:center;
  position: relative;
  section:nth-child(1){
    letter-spacing: .1rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.white};
  }
`;

export const StyledSearchWrapper = styled.div`
  display:flex;
  width: 100%;
  align-items:center;
  justify-content:center;
`;

export const StyledIcon = styled.div`
  cursor: pointer;
  padding: 0 .6rem;
  display: inline-block;
`;


export const StyledSearchBar = styled.input`
  width: 90%;
  margin: 4rem 0;
  padding: .3rem .7rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  transition: ${({ theme }) => theme.transition.mainTransition};
  font-size: 1.3rem;
  letter-spacing: .1rem;
  text-transform: capitalize;
  animation: ${grow} 500ms ease-in-out;
  &:active{
    background: ${({ theme }) => theme.colors.danger};
  }
  &:focus{
    background: ${({ theme }) => theme.colors.danger};
    box-shadow: ${({ theme }) => theme.shadow.darkShadow};
    color: ${({ theme }) => theme.colors.white};
    border: 3px solid ${({ theme }) => theme.colors.primary};
    width: 94%;
  }


`;

export const MealGrid = styled.section`
   display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  @media(min-width: 1100px){
    display: grid;
    padding: .5rem;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
  }

`;

export const StyledMealItem = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.offWhite};
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  border: 3px solid ${(props) => props.theme.colors.primary};
  border-radius: 1rem;
  padding: .3rem;
  max-width: 25rem;
  @media(max-width: 1100px){
    width: 100%;
    margin: .5rem 0;
  }
  transition: ${(props) => props.theme.transition.mainTransition};

`;


export const StyledMealItemHeader = styled.div`
    .overlay{
        background:${(props) => props.theme.colors.darkRGBA};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
    }

    img{
      width: 100%;
      display: block;
      border-radius: 1rem;
    }


`;


export const StyledMealItemBody = styled.div`
  /* display: none; */
  /* position: relative;
  left: 50%;
  top: -30%;
  transform: translate(-50%, 0); */
  z-index: 2;
  position: relative;
  transition: ${(props) => props.theme.transition.mainTransition};
  h4{
    letter-spacing: .1rem;
    font-size: 1.5rem;
    padding: 1rem 0;
    }

  display: flex;
  color: ${(props) => props.theme.colors.white};
  flex-direction: column;
  position: relative;
  padding: .2rem 0;
  span{
    font-size: 1.1rem;
  }
  #showDesc{
    cursor: pointer;
    position:absolute;
    right: 0;
  }
  p{
    padding: .6rem 0;
    letter-spacing: .1rem;
    line-height: 1.5rem;
    font-size: 1rem;
  }
`;
