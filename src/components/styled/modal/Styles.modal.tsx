import styled from 'styled-components';


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
  border: 2px solid #333;
  height: 31rem;

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
