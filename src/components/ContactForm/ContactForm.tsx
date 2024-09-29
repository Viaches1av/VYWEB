import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };
  return (
    <section id="contact">
      <div className={styles.container}>
        <div className={styles.contactForm}>
          <h2 className={styles.title}>{t('contact')}</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={t('contact_form.name_placeholder')}
              className={styles.input}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder={t('contact_form.email_placeholder')}
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder={t('contact_form.message_placeholder')}
              className={styles.textarea}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className={styles.button}>
              {t('contact_form.submit_button')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
