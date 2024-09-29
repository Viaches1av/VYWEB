import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={switcherRef} className={styles.languageSwitcher}>
      <button onClick={toggleMenu} className={styles.button}>
        {i18n.language.toUpperCase()}
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          <button onClick={() => changeLanguage('en')} className={styles.languageButton}>EN</button>
          <button onClick={() => changeLanguage('ru')} className={styles.languageButton}>RU</button>
          <button onClick={() => changeLanguage('ua')} className={styles.languageButton}>UA</button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
