import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    console.log("handleSubmit", values);
    onAdd.values;
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        username: "",
        usernumber: "",
        id: nanoid(),
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
