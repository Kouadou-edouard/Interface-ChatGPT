// MessageList.jsx
import React from 'react';

const MessageList = ({ messages }) => {
  // Vérifiez si 'messages' est défini et est un tableau
  if (!messages || !Array.isArray(messages)) {
    console.error("Invalid 'messages' prop:", messages);
    return null; // ou un composant de secours, selon vos besoins
  }

  return (
    <ul className="message-list">
      {messages.map((message, index) => {
        // Vérifiez si 'message.text' est défini
        if (message && message.text) {
          return <li key={index}>{message.text}</li>;
        } else {
          console.error("Invalid message object:", message);
          return null; // ou un composant de secours, selon vos besoins
        }
      })}
    </ul>
  );
};

export default MessageList;
