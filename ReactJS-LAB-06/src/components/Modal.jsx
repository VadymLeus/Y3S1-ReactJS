
import React from 'react';

const Modal = ({ message, onRestart }) => {
  return (
    <>
      <div className="modal-overlay" />
      <div className="modal">
        <h2>{message}</h2>
        <button onClick={onRestart}>Restart Game</button>
      </div>
    </>
  );
};

export default Modal;
