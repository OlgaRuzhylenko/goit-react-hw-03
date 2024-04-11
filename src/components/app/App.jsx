import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import initialContacts from "../contacts.json";
import css from "./App.module.css";
import { useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const handleDeleteTask = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={handleDeleteTask} />
    </div>
  );
}
