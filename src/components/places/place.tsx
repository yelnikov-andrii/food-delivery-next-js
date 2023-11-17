import { PlaceInterface } from '@/app/types';
import Image from 'next/image';
import React from 'react';



interface Props {
  place: PlaceInterface
}

export const Place: React.FC <Props> = ({ place }) => {
  return (
    <div className="place" key={place.name}>
      <Image 
        src={place.img} 
        alt="place" 
        className="place__img"
        layout="responsive"
        width={100}
        height={100}
      />
      <p className="places__name">
        {place.name}
      </p>
    </div>
  )
}
