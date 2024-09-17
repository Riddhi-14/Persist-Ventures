import React from 'react';
import Dashboard from './Dashboard';
import ContactOverlay from './ContactOverlay';

const contacts = [
  {
    name: 'John Doe',
    platforms: [
      { name: 'iMessage', icon: '/imessage-icon.png' },
      { name: 'Messenger', icon: '/messenger-icon.png' }
    ]
  }
];

function App() {
  return (
    <div>
      <Dashboard />
      <ContactOverlay contacts={contacts} />
    </div>
  );
}

export default App;
