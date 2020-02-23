/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { StyledTransactionForm, StyledInput } from '../Styles.income';
import { StyledBtn } from '../../styled/Buttons';


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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      title: '',
      amount: 0,
    });
  };

  return (
    <StyledTransactionForm onSubmit={handleSubmit}>
      <label htmlFor="title">
        {' '}
        Title:
        <StyledInput type="text" name="title" value={title} onChange={handleChange} />
      </label>

      <label htmlFor="amount">
        {' '}
        amount:
        <StyledInput type="number" name="amount" value={amount} onChange={handleChange} />
      </label>
      <StyledBtn as="button">Add Transaction</StyledBtn>
    </StyledTransactionForm>
  );
};
export default TransactionForm;
