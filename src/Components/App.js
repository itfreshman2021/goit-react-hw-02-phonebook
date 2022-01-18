import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';
import ContactForm from './contactForm/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  changeFilter = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  addContact = dataContact => {
    console.log(dataContact);
    const contactNew = {
      id: uuidv4(),
      name: dataContact.name,
      number: dataContact.number,
    };
    this.setState(({ contacts }) => ({ contacts: [...contacts, contactNew] }));
  };

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <div className={s.phonebook}>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />

          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList visibleContacts={visibleContacts} />
        </div>
      </>
    );
  }
}
ContactForm.propTypes = { onSubmit: PropTypes.func.isRequired };
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default App;
