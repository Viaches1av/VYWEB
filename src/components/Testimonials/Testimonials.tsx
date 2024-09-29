import React from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import styles from './Testimonials.module.css';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: t('client_1_name'),
      date: t('client_1_date'),
      text: t('client_1_text'),
      avatar: 'https://via.placeholder.com/60',
    },
    {
      id: 2,
      name: t('client_2_name'),
      date: t('client_2_date'),
      text: t('client_2_text'),
      avatar: 'https://via.placeholder.com/60',
    },
    {
      id: 3,
      name: t('client_3_name'),
      date: t('client_3_date'),
      text: t('client_3_text'),
      avatar: 'https://via.placeholder.com/60',
    },
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('testimonials')}</h2>
        <Slider {...settings} className={styles.slider}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonial}>
              <div className={styles.header}>
                <div className={styles.avatarWrapper}>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className={styles.avatar}
                  />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{testimonial.name}</h3>
                  <p className={styles.date}>{testimonial.date}</p>
                </div>
              </div>
              <div className={styles.textWrapper}>
                <p className={styles.text}>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
