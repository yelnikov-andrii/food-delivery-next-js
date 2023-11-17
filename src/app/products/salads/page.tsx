import { Products } from '@/app/components/Products/Products';
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

