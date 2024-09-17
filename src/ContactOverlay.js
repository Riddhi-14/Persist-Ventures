import React from 'react';

const ContactOverlay = ({ contacts }) => {
  return (
    <div>
      {contacts.map(contact => (
        <div key={contact.name}>
          <h3>{contact.name}</h3>
          {contact.platforms.map(platform => (
            <img src={platform.icon} alt={platform.name} key={platform.name} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContactOverlay;
