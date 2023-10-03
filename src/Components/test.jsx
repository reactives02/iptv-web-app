import React, { useState, useEffect } from 'react';

const Test = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const socket = new WebSocket('ws://localhost:8080'); // Replace with your WebSocket server URL

  useEffect(() => {
    // Listen for WebSocket messages
    socket.onmessage = (event) => {
      const receivedMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    // Clean up WebSocket connection
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        text: inputMessage,
        timestamp: new Date().getTime(),
      };
      socket.send(JSON.stringify(newMessage));
      setInputMessage('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <span>{new Date(message.timestamp).toLocaleTimeString()}: </span>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Test;
