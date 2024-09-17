import React, { useState, useEffect } from 'react';
import { startMatrixClient } from './matrixClient';
import MessageSummary from './MessageSummary';

const Dashboard = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const matrixClient = startMatrixClient();

    // Listen for new messages from Matrix rooms
    matrixClient.on('Room.timeline', (event, room) => {
      if (event.getType() === 'm.room.message') {
        const newMessage = {
          sender: event.getSender(),
          body: event.getContent().body,
          timestamp: event.getTs()
        };
        setMessages(prevMessages => [newMessage, ...prevMessages]);
      }
    });

    return () => {
      matrixClient.stopClient();
    };
  }, []);

  return (
    <div>
      <h1>Unified Messaging Dashboard</h1>
      <MessageSummary messages={messages} />
    </div>
  );
};

export default Dashboard;
