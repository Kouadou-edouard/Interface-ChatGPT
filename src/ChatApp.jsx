// ChatApp.jsx

import React, { useState } from 'react';
import ChatBox from './ChatBox';
import './index.css';


const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    setMessages([...messages, { text, user: 'user' }]);
    // Ajoutez ici la logique pour interagir avec votre modèle ou service backend
  };

  return (
    <div className="app-container">
      <div className="left-sidebar">
        {/* Ajoutez ici le composant pour afficher l'historique de conversation */}
        <h2>Historique de recherche</h2>
        {/* Ajoutez ici le contenu de l'historique de conversation */}
      </div>
      <div className="main-content">
        <h1>PROJET_PGA</h1>
        <ChatBox messages={messages} onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatApp;
