import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.usernumber,
    };
    onAdd(newContact);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        username: "",
        usernumber: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="">Name</label>
          <Field name="username" />
        </div>
        <div>
          <label htmlFor="">Number</label>
          <Field name="usernumber" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
