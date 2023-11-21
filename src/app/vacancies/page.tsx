import React from 'react';
import { Vacancy } from '../../components/vacancies/vacancy';
import { arrVacancies } from '@/data/vacancies';
import styles from './page.module.scss';

export default function Vacancies() {
  return (
    <div className={styles.vacancies}>
      <h1>
        Вакансії
      </h1>
      <div className={styles.vacancies__block}>
        {arrVacancies.map(vacancy => (
          <Vacancy 
            vacancy={vacancy} 
            key={vacancy.name}
          />
        ))}
      </div>
    </div>
  )
}
