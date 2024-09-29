import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AboutMe.module.css';

const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.aboutMe}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('about')}</h2>
        <p className={styles.text}>
          {t('about_description')}
        </p>
        <div className={styles.imagePlaceholder}></div>
      </div>
    </section>
  );
};

export default AboutMe;
