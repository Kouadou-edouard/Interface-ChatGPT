// ChatBox.jsx
import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatBox = ({ messages, onSendMessage }) => {
  return (
    <div className="chat-box">
      <div className="message-list-container">
        <MessageList messages={messages} />
      </div>
      <div className="message-input-container">
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
};

export default ChatBox;
