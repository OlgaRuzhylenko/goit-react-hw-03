import ContactForm from "../ContactForm/ContactForm";
import css from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {/* <ContactForm name={contact.name} number={contact.number} /> */}
          <ContactForm data={contact} />
        </li>
      ))}
    </ul>
  );
}
