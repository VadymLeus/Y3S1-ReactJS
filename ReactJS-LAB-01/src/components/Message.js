import React from 'react';

function Message({ msg, isMyMessage, onDelete }) {
  return (
    <li className={isMyMessage ? 'my-message' : 'other-message'}>
      <strong>{msg.user}:</strong> {msg.text}
      <button className="delete-button" onClick={onDelete}>X</button>
    </li>
  );
}

export default Message;
