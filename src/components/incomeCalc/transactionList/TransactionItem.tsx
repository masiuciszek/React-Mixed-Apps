/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { connect } from 'react-redux';
import { ITransactionItem } from '../../../utils/incomeData';
import { StyleTransactionItem } from '../Styles.income';
import { deleteTransaction } from '../../../redux/incomeCalc/income.actions';
import useToggle from '../../../hooks/useToggle';
import Card from '../../styled/modal/Card';
import Modal from '../../styled/modal/Modal';

interface P {
  data: ITransactionItem;
  deleteTransaction: Function;
}

const TransactionItem: React.FC<P> = ({ data, deleteTransaction }) => {
  const { id, title, amount } = data;
  const [showOptions, toggleOptions] = useToggle(false);

  const handleDelete = () => {
    const answer = prompt('are you sure you want to delete? Enter yes or no ! ');
    if (answer === 'yes') {
      deleteTransaction(id);
    }
  };


  let content;
  if (showOptions) {
    content = (
      <Card
        title="Transaction Options"
        close={toggleOptions}
        text="Delete or update your transaction"
        btnShow
        deleteTransaction={deleteTransaction}
        id={id}
      />
    );
  }

  return (
    <>
      <StyleTransactionItem amount={amount}>
        {' '}
        <h4 onClick={toggleOptions}>
          {title}
        </h4>
        <h4>
          {amount}
          <span className="label" />
        </h4>
        {' '}
      </StyleTransactionItem>
      {showOptions && <Modal show={showOptions} content={content} close={toggleOptions} />}
    </>
  );
};


export default connect(null, { deleteTransaction })(TransactionItem);
