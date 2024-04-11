import css from "./ContactListItem.module.css";

export default function ContactListItem({ name, number }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{number}</p>
    </div>
  );
}
