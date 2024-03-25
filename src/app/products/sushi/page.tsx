import { Products } from '../../../components/products/Products';
import React from 'react'

export default function Sushi() {

  return (
    <>
      <Products 
        typeId={2}
        productCategories={['Усі', 'Суші-сети', 'Cуші', 'Гункани', 'Роли', 'Теплі Роли']}
        name="Суші"
      />
    </>
  )
}
