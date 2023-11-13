import React from 'react';

const ButtonModal = ({modal, setModal}) => {
  return (
    <button onClick={()=> setModal(!modal)}>
      {modal ? "x" : "+" }
    </button>
  );
};

export default ButtonModal;
