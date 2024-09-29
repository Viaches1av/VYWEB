import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Works.module.css';

const Works: React.FC = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  const works = [
    {
      id: 1,
      title: t('work_1_title'),
      description: t('work_1_description'),
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://example.com/project1',
    },
    {
      id: 2,
      title: t('work_2_title'),
      description: t('work_2_description'),
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://example.com/project2',
    },
    {
      id: 3,
      title: t('work_3_title'),
      description: t('work_3_description'),
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://example.com/project3',
    },
    {
      id: 4,
      title: t('work_4_title'),
      description: t('work_4_description'),
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://example.com/project4',
    },
    {
      id: 5,
      title: t('work_5_title'),
      description: t('work_5_description'),
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://example.com/project5',
    },
    {
      id: 6,
      title: t('work_6_title'),
      description: t('work_6_description'),
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: 'https://example.com/project6',
    },
  ];

  const visibleWorks = showMore ? works : works.slice(0, 3);

  return (
    <section id="works" className={styles.works}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('works')}</h2>
        <div className={`${styles.grid} ${showMore ? styles.showAll : ''}`}>
          {visibleWorks.map((work) => (
            <a key={work.id} href={work.projectUrl} target="_blank" rel="noopener noreferrer" className={styles.workItem}>
              <img src={work.imageUrl} alt={work.title} className={styles.image} />
              <div className={styles.overlay}>
                <h3 className={styles.workTitle}>{work.title}</h3>
                <p className={styles.workDescription}>{work.description}</p>
              </div>
            </a>
          ))}
        </div>
        <button className={styles.button} onClick={() => setShowMore(!showMore)}>
          {showMore ? t('hide_works_button') : t('show_more_button')}
        </button>
      </div>
    </section>
  );
};

export default Works;
