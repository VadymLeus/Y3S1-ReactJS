import React from 'react';
import Message from './Message';

function MessageList({ messages, username, onDeleteMessage }) {
  return (
    <ul className="message-list">
      {messages.map((msg, index) => (
        <Message
          key={index}
          msg={msg}
          isMyMessage={msg.user === username}
          onDelete={() => onDeleteMessage(index)}
        />
      ))}
    </ul>
  );
}

export default MessageList;
