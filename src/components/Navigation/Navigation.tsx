import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Navigation.module.css';

const Menu: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const lockScroll = () => {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  };

  const unlockScroll = () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  };

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="#home" className={styles.logo}>VYWEB</a>
        <div className={styles.rightSide}>
          <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
            <li><a href="#about" onClick={toggleMenu}>{t('about')}</a></li>
            <li><a href="#skills" onClick={toggleMenu}>{t('skills')}</a></li>
            <li><a href="#works" onClick={toggleMenu}>{t('works')}</a></li>
            <li><a href="#testimonials" onClick={toggleMenu}>{t('testimonials')}</a></li>
            <li><a href="#contact" onClick={toggleMenu}>{t('contact')}</a></li>
          </ul>
          <LanguageSwitcher />
          <div className={styles.burger} onClick={toggleMenu}>
            <div className={`${styles.line} ${isOpen ? styles.line1 : ''}`}></div>
            <div className={`${styles.line} ${isOpen ? styles.line2 : ''}`}></div>
            <div className={`${styles.line} ${isOpen ? styles.line3 : ''}`}></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
