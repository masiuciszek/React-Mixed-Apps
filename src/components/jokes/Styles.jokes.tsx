import styled from 'styled-components';


export const StyledJokeWrapper = styled.div`
  margin: 4rem auto;
  border: 2px solid purple;
  height: 80vh;
  display:flex;
  /* flex-direction:column; */
  overflow:scroll;
`;

export const StyledSide = styled.div`
  padding: 2rem;
  height: 80vh;
  width: 30%;
  display:flex;
  flex-direction:column;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.offWhite};
  align-items:center;
  justify-content:center;
`;

export const StyledJokes = styled.div`
  width: 70%;
  display: flex;
  flex-direction:column;
  align-items: center;
  height: 100%;
  .info{
    font-size: 1.6rem;
    padding: 2rem;
  }
`;

export const StyledJokeItem = styled.div`

`;


export const JokeTitle = styled.div`

  h3{
    font-size: 2rem;
    letter-spacing: .1rem;
    text-align:center;
    border-bottom: 2px solid ${(props) => props.theme.colors.offWhite};
    margin: 0 0 2rem 0;
  }
`;
