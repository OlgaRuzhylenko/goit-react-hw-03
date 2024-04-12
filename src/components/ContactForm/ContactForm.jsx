import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  username: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  usernumber: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
})

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
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.item}>
          <label htmlFor="">Name</label>
          <Field name="username" />
          <ErrorMessage name="username" component="span" className={css.error}/>
        </div>
        <div className={css.item}>
          <label htmlFor="">Number</label>
          <Field name="usernumber" />
          <ErrorMessage name="usernumber" component="span" className={css.error}/>
        </div>

        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
