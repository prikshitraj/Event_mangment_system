import React, { useState } from 'react';
import './App.css';

interface ChatMessage {
  author: string;
  message: string;
}

const App: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [newChatMessage, setNewChatMessage] = useState('');

  const handleSendMessage = () => {
    if (newChatMessage.trim() !== '') {
      setChatMessages([
        ...chatMessages,
        { author: 'You', message: newChatMessage },
      ]);
      setNewChatMessage('');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewChatMessage(event.target.value);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="twitch-logo">twitch</div>
        <div className="search-bar">
          <input type="text" placeholder="Search for channels, games, etc..." />
        </div>
        <div className="get-bits">Get Bits</div>
      </header>
     
    </div>
  );
};

export default App;