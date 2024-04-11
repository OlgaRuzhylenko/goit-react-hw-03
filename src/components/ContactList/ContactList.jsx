import ContactListItem from "../ContactListItem/ContactListItem";
import css from "./ContactList.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <BsFillPersonFill />
          <BsFillTelephoneFill />
          <ContactListItem
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
            id={contact.id}
          />

          {/* <ContactListItem data={contact} /> */}
        </li>
      ))}
    </ul>
  );
}
