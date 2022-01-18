import React from 'react';

import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  HandleSubmit = event => {
    event.preventDefault();

    const contactNew = { id: uuidv4(), name: this.state.name, number: this.state.number };
    this.setState(({ contacts }) => ({ contacts: [...contacts, contactNew] }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
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
          <form onSubmit={this.HandleSubmit} className={s.form}>
            <label className={s.label}>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                value={this.state.name}
                onChange={this.handleChange}
                required
                className={s.input}
              />
            </label>
            <label className={s.label}>
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                value={this.state.number}
                onChange={this.handleChange}
                required
                className={s.input}
              />
            </label>

            <button type="submit" className={s.button}>
              Add contact
            </button>
          </form>
          <h2>Contacts</h2>
          <label className={s.label}>
            Find contacts by name
            <input
              type="text"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              value={this.state.filter}
              onChange={this.handleChange}
              required
              className={s.input}
            />
          </label>
          <ul>
            {visibleContacts.map(visibleContact => {
              const { id, name, number } = visibleContact;
              return (
                <li key={id} className={s.li}>
                  <p>
                    {name}:<span className={s.span}>{number}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
export default App;
