import styled, { css } from 'styled-components';

const FlexStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;

export const StyledModalContainer = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1050;
  display: flex;
  align-items:baseline;
`;
export const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background: rgba(0, 0, 0, 0.5);
`;
export const ModalBoxSetup = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 62%;
  overflow: hidden;
  padding: .2rem;
  margin: 5rem auto;
  z-index:1;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
  background: #fff;
  /* border: 0.5px solid #e8e8e8; */
  border: 2px solid ${(props) => props.theme.colors.primary};
  height: 31rem;
  border-radius: 1rem;
  @media(max-width: 654px){
    width: 82%;
  }
`;


export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  .card-head {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
h3 {
  font-size: 2rem;
  text-align:center;
}
.close {
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right:1rem;
}
.card-body{
  p{
    font-size: 1.2rem;
    padding: 2rem 0;
  }
}

.btn-group{
  margin-top: auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  width: 90%;
  button{
    padding: .2rem .44rem;
    font-size: 1rem;
    width: 12rem;
  }
  .update{
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
  .delete{
    background: ${(props) => props.theme.colors.danger};
    color: ${(props) => props.theme.colors.primary};
  }
}

@media(max-width: 654px){
   .card-head{
     margin-top: 2rem;
   }
  }
`;


export const StyledCardForm = styled.form`
  ${FlexStyle}
  padding: .5rem;
  height: 22rem;
  label{
    ${FlexStyle}
    font-size:1rem;
    text-align:left;
    span{
      margin-right: auto;
      font-size: 1.2rem;
      padding: .4rem 0;
    }
  }
  button{
    padding: .2rem .5rem;
    font-size: 1.1rem;
    margin-top: 1.5rem;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;
