/* eslint-disable react/prop-types */
import * as React from 'react';
import { StyledCard } from './Styles.modal';
import { StyledBtn } from '../Buttons';
import useToggle from '../../../hooks/useToggle';

interface P {
  title: string;
  close: () => void;
  text?: string;
  btnShow?: boolean;
  deleteTransaction: Function;
  id: string;
}

const Card: React.FC<P> = ({
  title, close, text, btnShow, deleteTransaction, id,
}) => {
  const [showUpdate, toggleUpdate] = useToggle(false);
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
            <StyledBtn as="button" className="update" onClick={toggleUpdate}>Update</StyledBtn>
            {' '}
            <StyledBtn as="button" className="delete" onClick={() => deleteTransaction(id)}>Delete</StyledBtn>
            {' '}
          </>
        ) }
      </div>
      {showUpdate && (
        <form>
          {' '}
          <input type="text" />
          {' '}
        </form>
      ) }
    </StyledCard>
  );
};
export default Card;
