import React from 'react'
import { arrVacancies } from '../data/vacancies'
import { Vacancy } from '../components/Vacancies/Vacancy'

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
