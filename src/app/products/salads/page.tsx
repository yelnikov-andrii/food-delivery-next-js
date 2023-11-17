import { Products } from '@/app/components/products/Products'
import React from 'react'

export default function Salads() {
  return (
    <>
      <Products 
        typeId={4}
        productCategories={[]}
        name="Салати"
      />
    </>
  )
}

