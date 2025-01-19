import { Products } from '../../../components/productsComponents/Products';
import React from 'react';
import server from 'next/client';


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

