import { FC } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactForm.module.css';

const ContactForm: FC = () => {
  const [state, handleSubmit] = useForm('xkovygyz');

  if (state.succeeded) {
    return (
      <p className={styles.submission}>
        Thanks for reaching out! Your message has been received, and I&apos;ll
        get back to you soon.
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          required
          className={styles.input}
          id="email"
          name="email"
          placeholder="your.email@example.com"
          type="email"
        />
        <ValidationError errors={state.errors} field="email" prefix="Email" />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          required
          className={styles.textarea}
          id="message"
          name="message"
          placeholder="Your message here..."
          rows={6}
        />
        <ValidationError
          errors={state.errors}
          field="message"
          prefix="Message"
        />
      </div>
      <button className={styles.submitButton} type="submit">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
