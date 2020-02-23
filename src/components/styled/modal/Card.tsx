/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { connect } from 'react-redux';
import { StyledCard } from './Styles.modal';
import { StyledBtn } from '../Buttons';
import useToggle from '../../../hooks/useToggle';
import CardForm from './CardForm';
import { setCurrent } from '../../../redux/incomeCalc/income.actions';
import { AppState } from '../../../redux';
import { selectCurrentTransaction } from '../../../redux/incomeCalc/income.select';
import { ITransactionItem } from '../../../utils/incomeData';


interface P {
  title: string;
  close: () => void;
  text?: string;
  btnShow?: boolean;
  deleteTransaction: Function;
  id: string;
  setCurrent: Function;
  currentTransaction: ITransactionItem | null;
  data: ITransactionItem;
}

const Card: React.FC<P> = ({
  title, close, text, btnShow, deleteTransaction, id, setCurrent, data, currentTransaction,
}) => {
  const [showUpdate, toggleUpdate] = useToggle(false);

  const handleUpdate = () => {
    setCurrent(data);
    toggleUpdate();
  };

  return (
    <StyledCard>
      <div className="card-head">
        <h3>{title}</h3>
        <span className="close" onClick={close}>
          ❌
        </span>
      </div>
      <div className="card-body">
        <p>{text}</p>
      </div>
      <div className="btn-group">
        {btnShow && (
          <>
            {' '}
            <StyledBtn as="button" className="update" onClick={handleUpdate}>Update</StyledBtn>
            {' '}
            <StyledBtn as="button" className="delete" onClick={() => deleteTransaction(id)}>Delete</StyledBtn>
            {' '}
          </>
        ) }
      </div>
      {showUpdate && (
        <CardForm toggleUpdate={toggleUpdate} currentTransaction={currentTransaction} />
      ) }
    </StyledCard>
  );
};

const mapStateToProps = (state: AppState) => ({
  currentTransaction: selectCurrentTransaction(state),
});

export default connect(mapStateToProps, { setCurrent })(Card);
