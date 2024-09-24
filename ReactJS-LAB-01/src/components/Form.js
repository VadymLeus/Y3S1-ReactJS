import React from 'react';

function Form({ username, message, onMessageChange, onUsernameChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={username}
        onChange={onUsernameChange}
        placeholder="Введіть ім'я користувача..."
      />
      <input
        type="text"
        value={message}
        onChange={onMessageChange}
        placeholder="Введіть повідомлення..."
      />
      <button type="submit">Відправити</button>
    </form>
  );
}

export default Form;
