/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { StyledTransactionForm, StyledInput } from '../Styles.income';

interface P {

}

interface IFormData {
  title: string;
  amount: number;
}

const TransactionForm: React.FC<P> = () => {
  const [formData, setFormData] = React.useState<IFormData>({
    title: '',
    amount: 0,
  });

  const { title, amount } = formData;

  return (
    <StyledTransactionForm>
      <label htmlFor="title"> Title:</label>
      <StyledInput type="text" name="title" value={title} />
    </StyledTransactionForm>
  );
};
export default TransactionForm;
