import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames'; // Импортируем classnames
import globalStyles from '../../App.module.css';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className={styles.skills}>
      <div className={classNames(globalStyles.container, styles.specificClass)}>
        <h2 className={styles.title}>{t('skills')}</h2>
        <ul className={styles.list}>
          <li className={styles.item}>{t('skills_list.item1')}</li>
          <li className={styles.item}>{t('skills_list.item2')}</li>
          <li className={styles.item}>{t('skills_list.item3')}</li>
          <li className={styles.item}>{t('skills_list.item4')}</li>
          <li className={styles.item}>{t('skills_list.item5')}</li>
          <li className={styles.item}>{t('skills_list.item6')}</li>
          <li className={styles.item}>{t('skills_list.item7')}</li>

          <li className={styles.item}>{t('skills_list.item3')}</li>
          <li className={styles.item}>{t('skills_list.item4')}</li>
          <li className={styles.item}>{t('skills_list.item5')}</li>
          <li className={styles.item}>{t('skills_list.item5')}</li>
          <li className={styles.item}>{t('skills_list.item6')}</li>
          <li className={styles.item}>{t('skills_list.item7')}</li>

          <li className={styles.item}>{t('skills_list.item4')}</li>
          <li className={styles.item}>{t('skills_list.item2')}</li>
          <li className={styles.item}>{t('skills_list.item5')}</li>
          <li className={styles.item}>{t('skills_list.item6')}</li>
          <li className={styles.item}>{t('skills_list.item3')}</li>
          <li className={styles.item}>{t('skills_list.item4')}</li>
          <li className={styles.item}>{t('skills_list.item5')}</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
