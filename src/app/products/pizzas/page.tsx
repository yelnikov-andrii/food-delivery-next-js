import { Products } from '@/app/components/Products/Products'
import React from 'react'

export default function Pizzas() {
  return (
    <>
      <Products 
        typeId={1} 
        productCategories={['Усі', 'Сирні', 'М\'ясні', 'Овочеві', 'Фірмові', 'Морські']}
        name="Піца"
      />
    </>
  )
}

