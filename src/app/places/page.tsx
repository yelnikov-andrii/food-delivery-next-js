import React from 'react'
import { arrPlaces } from '../data/placesData'
import { Place } from '../components/Places/Place'

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
