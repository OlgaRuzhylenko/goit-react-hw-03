import css from "./Contact.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Contact({ name, number, id, onDelete }) {
  return (
    <div className={css.container}>
      <div>  
      <div className={css.wraper}>  
      <BsFillPersonFill />
        <h1 className={css.title}>{name}</h1>
        </div>
        <div className={css.wraper}> 
        <BsFillTelephoneFill />
      <p className={css.number}>{number}</p>
      </div>
      </div>
    <div>
      <button onClick={() => onDelete(id)}>Delete</button>
      </div>
      
    </div>
  );
}
