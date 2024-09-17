import React, { useState } from 'react';

const MessageSummary = ({ messages }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <h2>Daily Message Summary</h2>
      {messages.map((message, index) => (
        <div key={index}>
          <p onClick={() => handleExpand(index)}>
            {message.sender}: {message.body.slice(0, 50)}...
          </p>
          {expandedIndex === index && (
            <div>
              <p>{message.body}</p>
              <button onClick={() => handleResponse('approve')}>Approve</button>
              <button onClick={() => handleResponse('edit')}>Edit</button>
              <button onClick={() => handleResponse('deny')}>Deny</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const handleResponse = (action) => {
  console.log(`Action: ${action}`);
};

export default MessageSummary;
