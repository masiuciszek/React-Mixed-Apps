/* eslint-disable @typescript-eslint/interface-name-prefix */
import styled, { css } from 'styled-components';

interface ITransactionItem {
  amount?: number;
}

const GenericStyle = css`
  padding:.6rem;
  border-radius: .3rem;
`;

export const StyledBalance = styled.section`
  ${GenericStyle};
  margin: 2rem 0;
  h3{
    font-size: 2rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    max-width: 24rem;
    font-weight: 300;
  }
`;

export const StyledIncomeCalc = styled.div`
  margin: 3rem 0;
  border : 2px solid blue;
  ${GenericStyle};
`;


export const StyleTransactionList = styled.section`
  width: 80%;
  margin: 1rem auto;

`;
export const StyleTransactionItem = styled.section<ITransactionItem>`
  ${GenericStyle};
  display: flex;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  justify-content: space-between;
  margin: 1rem 0;
  border-radius: .3rem;
  h4{
    font-size: 1.5rem;
    font-weight: 300;
    cursor: pointer; /**TODO: Fire modal */
    .label{
      display: inline-block;
      width: .2rem;
      margin-left:.4rem;
      height: 2rem;
      background: ${({ theme, amount }) => (amount && amount > 0 ? theme.colors.green : theme.colors.danger)};
    }
  }
`;

export const StyledIncomeExpense = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  position: relative;
  ${GenericStyle};
  @media(max-width: 580px){
    flex-direction: column;
  }
  .box{
    display: flex;
    padding: .5rem;

    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.offWhite};
    letter-spacing: .15rem;
    h4{
      font-size: 1.5rem;
      font-weight: 300;
    }
    span{
      font-size: 1.1rem;
    }
    @media(min-width: 580px){
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 50%;
  }
    @media(max-width: 580px){
      justify-content: space-between;
      align-items:center;
    h4{
      border-bottom:1px solid ${(props) => props.theme.colors.primary};
      width: 80%;
    }

  }

  }
  #income{
    color: ${(props) => props.theme.colors.green};

  }
  #expense{
    color: ${(props) => props.theme.colors.danger};
  }

  @media(min-width: 580px){
  &::after{
    content: '';
    width: 1%;
    height: 57%;
    border-radius: .2rem;
    background: ${(props) => props.theme.colors.primary};
    padding:.2rem;
    position: absolute;
    left: 50%;
    transform:translate(-50%,0);
    top: 1.5rem;
  }
  }
`;


export const StyledTransactionForm = styled.form`

`;

export const StyledInput = styled.input`

`;
