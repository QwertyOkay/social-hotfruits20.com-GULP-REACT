import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Button from 'components/button/Button';
import notices from 'helpers/Notification';
import styles from './ContactForm.module.scss';
import contactImage from 'images/email.png';

function ContactForm() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name is too short')
      .matches(
        /^[a-zA-ZА-ЩЬЮЯҐЄІЇа-щьюяґєії'\s]+$/,
        'Only alphabets are allowed'
      )
      .required('This field is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('This field is required'),
    message: Yup.string()
      .min(3, 'Text is too short')
      .required('This field is required'),
  });

  const handleSubmit = (values, actions) => {
    if (values) {
      console.log(values);
      actions.resetForm();
      notices.showSuccess('The email has been sent');
      return;
    }
  };

  return (
    <div className={styles.formWrapper} data-form>
      <p className={styles.formTitle}>Please enter your details</p>

      <div className={styles.formImg}>
        <img src={contactImage} alt="email" width={260} />
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={styles.contactForm}>
            <label className={styles.formGroup}>
              <Field
                required
                type="text"
                name="name"
                className={styles.formInput}
                placeholder="Your name"
              />
              {errors.email && touched.email && (
                <div className={styles.errorMsg}>try again</div>
              )}
            </label>
            <label className={styles.formGroup}>
              <Field
                required
                type="email"
                name="email"
                className={styles.formInput}
                placeholder="Your email"
                pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
              />
              {errors.email && touched.email && (
                <div className={styles.errorMsg}>try again</div>
              )}
            </label>
            <label className={styles.formGroup}>
              <Field
                as="textarea"
                required
                type="textarea"
                name="message"
                className={styles.formTextarea}
                placeholder="Your message"
              />
              {errors.email && touched.email && (
                <div className={styles.errorMsg}>try again</div>
              )}
            </label>

            <Button variant="btnContact" type={'submit'} title={'Submit'} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
