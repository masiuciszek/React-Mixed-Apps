/* eslint-disable no-nested-ternary */
import styled from 'styled-components';


interface ILikeArea {
  votes: number;
}

export const StyledJokeWrapper = styled.div`
  margin: 4rem auto;
  border: 3px solid ${(props) => props.theme.colors.secondary};
  height: 80vh;
  width: 100%;
  display:flex;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};

`;

export const StyledSide = styled.div`
  padding: 2rem;
  height: 100%;
  width: 30%;
  display:flex;
  flex-direction:column;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.offWhite};
  align-items:center;
  justify-content:center;

  button {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.danger};
    position: relative;
    &:active{
      top: .2rem;
    }
  }
`;

export const StyledJokes = styled.div`
  width: 70%;
  display: flex;
  flex-direction:column;
  align-items: center;
  height: 100%;
  overflow:scroll;
  .info{
    font-size: 1.6rem;
    padding: 2rem;
  }
`;

export const StyledJokeItem = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding: 1.2rem .8rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  width: 100%;
  background: ${(props) => props.theme.colors.danger};
  color: ${(props) => props.theme.colors.white};
  strong{
    font-size: 1.2rem;
  }
`;


export const JokeTitle = styled.div`
  .Smiley{
    font-size: 6rem;
    text-align: center;
    margin: 0 auto;
    display: block;
  }
  h3{
    font-size: 2rem;
    letter-spacing: .1rem;
    text-align:center;
    border-bottom: 2px solid ${(props) => props.theme.colors.offWhite};
    margin: 0 0 2rem 0;
  }
`;


export const LikeArea = styled.div<ILikeArea>`
padding: .5rem;
border: 2px solid ${({ theme, votes }) => (
    votes <= 3 ? theme.colors.offWhite
      : votes <= 6 ? 'yellow'
        : votes <= 9 ? 'steelblue'
          : theme.colors.green)};

border-radius: 50%;
display: flex;
margin: 0 .6rem;

   span:nth-child(2) {
    font-size: 1.4rem;
    padding: .4rem;
  }
    button{
    font-size: 1.3rem;
    cursor: pointer;
    background: none;
    border: none;
  }

`;
export const FaceArea = styled.div`
  .face{
    font-size: 3.5rem;
  }
`;
