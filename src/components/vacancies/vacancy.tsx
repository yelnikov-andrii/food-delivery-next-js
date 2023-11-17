import { VacancyInt } from '@/app/types';
import Image from 'next/image';
import React from 'react';

interface Props {
  vacancy: VacancyInt;
}

export const Vacancy: React.FC <Props> = ({ vacancy }) => {
  return (
    <div className="vacancy" key={vacancy.name}>
      <Image 
        src={vacancy.img} 
        alt="" 
        className="vacancy__img"
        layout='responsive'
        width={100}
        height={100}
      />
      <p className="vacancy__name">
        {vacancy.name}
      </p>
    </div>
  )
}
