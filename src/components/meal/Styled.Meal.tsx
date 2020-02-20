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

export const MealGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

@media(min-width: 800px){

  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  grid-gap: 10px;
}
  @media(min-width: 1100px){
  /* grid-template-columns: repeat(auto-fit, minmax(400px, 2fr)); */
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-gap: 10px;
  }
`;

export const StyledMealItem = styled.div`
  background: ${(props) => props.theme.colors.offWhite};
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  border: 2px solid ${(props) => props.theme.colors.danger};
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 25rem;

  @media(max-width: 800px){
    width: 100%;
    margin: .5rem 0;
  }


`;


export const StyledMealItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  transition: ${(props) => props.theme.transition.mainTransition};
  h4{
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.primary};
    width: 80%;
    align-self: center;
    text-align: center;
    display: none;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
  img{
    width: 100%;
    position: relative;
    border-radius:.5rem;
    display: block;
    border: 2px solid ${(props) => props.theme.colors.primary};
    transition: ${(props) => props.theme.transition.mainTransition};

    }


`;


export const StyledMealItemBody = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.primary};
  flex-direction: column;
  position: relative;
  padding: .2rem 0;
  span{
    font-size: 1.5rem;
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
