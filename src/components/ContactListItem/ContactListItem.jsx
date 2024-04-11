import css from "./ContactListItem.module.css";

export default function ContactListItem({ name, number, id, onDelete }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
