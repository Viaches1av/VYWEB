import React from 'react';
// import { useTranslation } from 'react-i18next';
import AboutMe from './components/AboutMe/AboutMe';
import ContactForm from './components/ContactForm/ContactForm';
import Messengers from './components/Messengers/Messengers';
import Resume from './components/Resume/Resume';
import Skills from './components/Skills/Skills';
import SocialLinks from './components/SocialLinks/SocialLinks';
import Testimonials from './components/Testimonials/Testimonials';
import Works from './components/Works/Works';
import Menu from './components/Navigation/Navigation';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './App.module.css';

const App: React.FC = () => {
  // const { t } = useTranslation();

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.logo}>VYWEB</h1>

        <LanguageSwitcher />
      </header>
      <Menu />
      <main className={styles.main}>
        <AboutMe />
        <Skills />
        <Works />
        <Testimonials />
        <ContactForm />
        <Resume />
      </main>
      <footer className={styles.footer}>
        {/* <div className={styles.container}> */}
          {/* <p>{t('footerText')}</p> */}
          <SocialLinks />
          <Messengers />
        {/* </div> */}
      </footer>
    </div>
  );
};

export default App;
