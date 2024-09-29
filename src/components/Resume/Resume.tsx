import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../Modal/Modal'; // Импортируем модальное окно (создадим его)
import styles from './Resume.module.css';

// Пути к изображениям резюме и PDF-файлам
const resumeImages = {
  en: '/assets/resume/resume-en.jpg',
  ru: '/assets/resume/resume-ru.jpg',
  ua: '/assets/resume/resume-ua.jpg',
};

const resumeFiles = {
  en: '/assets/resume/resume-en.pdf',
  ru: '/assets/resume/resume-ru.pdf',
  ua: '/assets/resume/resume-ua.pdf',
};

const Resume: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);

  // Текущий язык страницы
  const currentLang = i18n.language;

  // Функция для открытия модального окна
  const openModal = () => {
    setModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className={styles.resume}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('resume')}</h2>
        <p className={styles.text}>{t('resume_description')}</p>

        {/* Изображение резюме с обработчиком клика */}
        <div className={styles.resumeImageContainer} onClick={openModal}>
          <img
            src={resumeImages[currentLang as keyof typeof resumeImages]}
            alt={t('resume')}
            className={styles.resumeImage}
          />
        </div>

        {/* Кнопка для скачивания PDF */}
        <a
          href={resumeFiles[currentLang as keyof typeof resumeFiles]}
          download
          className={styles.downloadButton}
        >
          {t('download_resume')}
        </a>

        {/* Модальное окно для отображения полного резюме */}
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <img
              src={resumeImages[currentLang as keyof typeof resumeImages]}
              alt={t('resume')}
              className={styles.modalResumeImage}
            />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Resume;
