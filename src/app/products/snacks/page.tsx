import { Products } from '@/app/components/Products/Product/Products'
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

