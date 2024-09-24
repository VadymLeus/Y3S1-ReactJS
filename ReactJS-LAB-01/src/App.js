import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import MessageList from './components/MessageList';

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== '' && username.trim() !== '') {
      setMessages([...messages, { user: username, text: message }]);
      setMessage('');
    }
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
  };

  return (
    <div className="form-container">
      <Form
        username={username}
        message={message}
        onMessageChange={handleMessageChange}
        onUsernameChange={handleUsernameChange}
        onSubmit={handleSubmit}
      />
      <MessageList
        messages={messages}
        username={username}
        onDeleteMessage={handleDeleteMessage}
      />
    </div>
  );
}

export default App;
