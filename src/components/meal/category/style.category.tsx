import styled from 'styled-components';
import { fade } from '../../styled/animations';

export const StyledCategory = styled.div`
  padding: 3rem 1rem;
  display: flex;
  flex-wrap:wrap;
  margin: 0 auto;
  justify-content:center;
  align-items:center;
  position: relative;
  #CategoriesBtn{
    text-align: center;
    background: ${({ theme }) => theme.colors.danger};
    font-size: 1.2rem;
    position: absolute;
    top: -1rem;
  }

`;

export const StyledCategoryItem = styled.div`
  border: 2px solid ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  margin: 1rem;
  width: 26rem;
  border-radius:1rem;
  transition: ${(props) => props.theme.transition.mainTransition};
  &:hover{
    background: ${(props) => props.theme.colors.darkRGBA};
    box-shadow: ${(props) => props.theme.shadow.darkShadow};
  }
  @media(max-width:990px){
    width: 100%;
  }
`;


export const StyledCategoryItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: .5rem;
  justify-content:center;
  align-items:center;
  img{
    width: 12em;
    padding: .6rem;
  }
  span{
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.white};
    letter-spacing: .1rem;
    cursor: pointer;
    padding: .6rem;
  }
`;
export const StyledCategoryItemBody = styled.div`
transition: ${({ theme }) => theme.transition.mainTransition};
    animation: ${fade} 500ms ease-in-out;
  p{
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: .1rem;
    transition: ${({ theme }) => theme.transition.mainTransition};
    animation: ${fade} 500ms ease-in-out;
    padding: .5rem;
    line-height: 2rem;
  }
`;
