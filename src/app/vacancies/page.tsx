import React from 'react';
import { Vacancy } from '../../components/vacancies/vacancy';
import { arrVacancies } from '@/data/vacancies';

export default function Vacancies() {
  return (
    <div className="vacancies">
      <h1>Вакансії</h1>
      <div className="vacancies__block">
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
