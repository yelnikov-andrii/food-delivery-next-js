import { Products } from '@/app/components/products/products';
import React from 'react'

export default function Snacks() {
  return (
    <>
      <Products 
        typeId={6}
        productCategories={['Усі', 'Холодні закуски', 'До пива']}
        name="Закуски"
      />
    </>
  )
}

