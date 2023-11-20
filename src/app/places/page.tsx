import React from 'react';
import { Place } from '../../components/places/place';
import { arrPlaces } from '@/data/placesData';

export default function Places() {
  return (
    <div className="places">
      <h1>Наші заклади</h1>
      <div className="places__block">
        {arrPlaces.map(place => (
          <Place place={place} key={place.name} />
        ))}
      </div>
    </div>
  )
}
