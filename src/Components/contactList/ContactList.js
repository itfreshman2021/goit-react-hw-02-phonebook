import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

const ContactList = ({ visibleContacts }) => (
  <ul>
    {visibleContacts.map(visibleContact => {
      const { id, name, number } = visibleContact;
      return <ContactListItem key={id} name={name} number={number} />;
    })}
  </ul>
);

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
