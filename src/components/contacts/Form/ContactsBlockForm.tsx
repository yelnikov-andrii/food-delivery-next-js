'use client';
import React from 'react';
import { useChangeBooleanWithTimeSpan } from '@/hooks/cart/useChangeBooleanWithTimeSpan';
import { ContactsForm } from './ContactsForm';
import styles from './form.module.scss';

export const ContactsBlockForm: React.FC = () => {
  const [formSubmitted, setFormSubmitted]: any = useChangeBooleanWithTimeSpan(false, false, 3000);

  return (
    <div className={styles.block}>
      <div className={styles.block__wrapper}>
        <p className={styles.block__title}>
          Зворотній зв&apos;язок
        </p>
        {formSubmitted === false ? (
          <ContactsForm setFormIsSubmitted={setFormSubmitted} />
        ) : (
          <div className={styles.block__submitted}>
            Дякуємо за звернення! Найближчим часом ми зв&apos;яжемося з Вами
          </div>
        )}
      </div>
      <div className={styles.block__map}>
        <iframe 
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!
          1d2568.256810085524!2d36.425417584130834!3d49.93152236723981!
          2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41270c41890debbf%3
          A0x50ef36d620f64500!2z0JzQvtGB0LrQvtCy0YHR
          jNC60LjQuSDQv9GA0L7RgdC_0LXQutGCLCAyOTYsINCl0LDRgNC60ZbQsiwg0KXQsNGA0LrR
          ltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDYxMDAw!5e0!3m2!1suk!2sua!4v1665185135479!5m2!1suk!2sua`} 
          width="auto" 
          height="350" 
          loading="lazy" 
          title="title" 
          className={styles.block__frame}>
        </iframe>
      </div>
    </div>
  );
};
