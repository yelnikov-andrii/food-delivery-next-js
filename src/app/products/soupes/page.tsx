import { Products } from '@/app/components/products/Products'
import React from 'react'

export default function Soupes() {
  return (
    <>
      <Products 
        typeId={7}
        productCategories={['Усі', 'Японські супи', 'Перші страви']}
        name="Супи"
      />
    </>
  )
}

