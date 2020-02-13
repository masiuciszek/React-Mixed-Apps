import styled from 'styled-components';


export const StyledCard = styled.div`
  padding: 2rem;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  button{
    position: absolute;
    top: 2rem;
  }
`;


export const CardItemHeader = styled.div`
  position: absolute;
  top:  0;
  left: 0;
`;

export const StyledCardItem = styled.div`
  position: relative;
  img {
    position:absolute;
    left: 50%;
    transform: translate(-50%, 0);

  }
`;
