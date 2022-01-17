import { useSelector, useDispatch } from 'react-redux';
import * as actions from './redux/actions';
import { filteredContacts, getFilter } from './redux/selectors.js';

import './App.css';
import { nanoid } from 'nanoid';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import ContactForm from './components/ContactForm';
import ContactLIst from './components/ContactList';
import Filter from './components/Filter/Filter';
import Title from './components/Title/Title';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filteredContacts);
  const filter = useSelector(getFilter);

  const formHandler = data => {
    const existingName = contacts.find(contact =>
      contact.name.includes(data.name),
    );

    if (!existingName) {
      const contactId = { id: nanoid(5) };
      dispatch(actions.addContact([...contacts, { ...contactId, ...data }]));
    } else {
      error({
        text: `${existingName.name} is already in the list!`,
        delay: 1500,
      });
    }
  };

  const contactDelete = id => {
    dispatch(actions.deleteContact(id));
  };

  const onFilter = event => {
    const { value } = event.currentTarget;
    dispatch(actions.changeFilter(value));
  };

  return (
    <div className="App">
      <Title title={'Phone book'} />
      <ContactForm onSubmit={formHandler} />
      <Title title={'Contacts'} />
      <Filter value={filter} onChange={onFilter} />
      <ContactLIst contacts={contacts} onDelete={contactDelete} />
    </div>
  );
};

export default App;
