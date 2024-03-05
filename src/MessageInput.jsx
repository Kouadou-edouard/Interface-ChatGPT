// src/components/MessageInput.jsx
import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    onSendMessage(inputText);
    setInputText('');
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Que recherchez-vous... ?"
        value={inputText}
        onChange={handleInputChange}
        style={{ width: '80%', height:'50px'}}
      />
     
      <button onClick={handleSendMessage}  
      style={{ width: '20%',  marginRight: '5px', height:'50px' }}>
        Recherchez</button>
      
    </div>
  );
};

export default MessageInput;
