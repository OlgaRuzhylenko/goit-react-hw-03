import css from "./ContactForm.module.css";

export default function ContactForm({ data: { name, number } }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{number}</p>
    </div>
  );
}
