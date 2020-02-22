import styled, { css } from 'styled-components';

interface ITransactionItem {
  amount?: number;
}

const GenericStyle = css`
  padding:.6rem;
`;


export const StyledIncomeCalc = styled.div`
  margin: 3rem 0;
  border : 2px solid green;
  ${GenericStyle};
`;


export const StyleTransactionList = styled.section`
  border : 2px solid green;
  width: 80%;
  margin: 1rem auto;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
`;
export const StyleTransactionItem = styled.section<ITransactionItem>`
  ${GenericStyle};
  display: flex;
  justify-content: space-between;
  h4{
    font-size: 1.8rem;

    .label{
      display: inline-block;
      width: .6rem;
      margin-left:.4rem;
      height: 2rem;
      background: ${({ theme, amount }) => (amount && amount > 0 ? theme.colors.green : theme.colors.danger)};
    }
  }
`;

export const StyledIncomeExpense = styled.div`
  border :2px solid red;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  .box{
    border :2px solid blue;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: .5rem;
    width: 50%;
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.primary};
    letter-spacing: .15rem;
    h4{
      font-size: 2rem;
      font-weight: 300;
    }
    span{
      font-size: 1.5rem;
    }
  }
  #income{
    color: ${(props) => props.theme.colors.green};

  }
  #expense{
    color: ${(props) => props.theme.colors.danger};
  }
`;
