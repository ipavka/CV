import React, {useState} from 'react';
import s from "./Contacts.module.scss";
import {InputText} from "../../common/com-components/InputText/InputText";
import {useFormik} from "formik";
import {Button} from "../../common/com-components/Button/Button";

type FormikErrorType = {
  name?: string
  email?: string
  textarea?: string
}

export const ContactForm = () => {

  const [data, setData] = useState<any>(null);

  const formik = useFormik({

    initialValues: {
      name: '',
      email: '',
      textarea: '',
    },
    validate: (values) => {
      const errors: FormikErrorType = {};

      if (!values.name) {
        errors.name = 'Name is required'
      } else if (values.name.trim().length < 2) {
        errors.name = "Min 2 symbols"
      }

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.textarea) {
        errors.textarea = 'Text is required';
      } else if (values.textarea.trim().length < 5) {
        errors.textarea = 'Write me a few words, please... (:';
      }

      return errors;
    },

    onSubmit: values => {
      setData(values)
      formik.resetForm();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className={s.inputBlock}>
          <div className={s.itemInputBlock}>
            <InputText placeholder={'Name'}
                       {...formik.getFieldProps('name')}/>
            {formik.touched.name && formik.errors.name &&
              <div className={s.errorMessage}>{formik.errors.name}</div>}
          </div>
          <div className={s.itemInputBlock}>
            <InputText placeholder={'Email'}
                       {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email &&
              <div className={s.errorMessage}>{formik.errors.email}</div>}
          </div>

        </div>
        <div className={s.blockTextArea}>
        <textarea className={s.textArea}
                  {...formik.getFieldProps('textarea')}
                  rows={8}
                  placeholder={'Your Message'}/>
          {formik.touched.textarea && formik.errors.textarea &&
            <div className={s.errorMessage}>{formik.errors.textarea}</div>}
        </div>
        <div className={s.buttonBlock}>
          <div className={s.infoDiv}>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            {/*Thank you for your message, I will definitely answer you (:*/}
          </div>
          {/*<Button onClick={sendHandler} isSpinner={isLoading}>Send</Button>*/}
          <Button type="submit">Send</Button>
        </div>
      </form>
    </>
  );
};

