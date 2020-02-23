/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import { connect } from 'react-redux';
import { StyledInput } from '../../incomeCalc/Styles.income';
import { StyledCardForm } from './Styles.modal';
import { StyledBtn } from '../Buttons';
import { updateTransaction, clearCurrent } from '../../../redux/incomeCalc/income.actions';
import { ITransactionItem } from '../../../utils/incomeData';

interface P {
  updateTransaction: Function;
  toggleUpdate: () => void;
  clearCurrent: () => void;
  currentTransaction: ITransactionItem | null;
}

const CardForm: React.FC<P> = ({
  updateTransaction, toggleUpdate, currentTransaction, clearCurrent,
}) => {
  React.useEffect(() => {
    if (currentTransaction !== null) {
      setFormData(currentTransaction);
    } else {
      setFormData({
        title: '',
        amount: 0,
      });
    }
  }, [currentTransaction]);


  const [formData, setFormData] = React.useState({
    title: '',
    amount: 0,
  });


  const { title, amount } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTransaction({
      title,
      amount: Number(amount),
    });

    // setFormData({
    //   title: '',
    //   amount: 0,
    // });
    clearCurrent();
    toggleUpdate();
  };

  return (
    <StyledCardForm onSubmit={handleSubmit}>
      <label htmlFor="title">
        <span>Title</span>
        <StyledInput type="text" name="title" onChange={handleChange} value={title} />
      </label>
      <label htmlFor="amount">
        <span>Amount</span>
        <StyledInput type="text" name="amount" onChange={handleChange} value={amount} />
      </label>
      <StyledBtn as="button">Update</StyledBtn>
    </StyledCardForm>
  );
};


export default connect(null, { updateTransaction, clearCurrent })(CardForm);
