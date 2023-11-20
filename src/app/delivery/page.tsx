import { delArr } from '@/data/deliveryData';
import React from 'react'

export default function Delivery() {
  return (
    <div className='delivery'>
      <h1 className='delivery__title'>
        Доставка та оплата
      </h1>
      <div className="delivery__block">
        <p className="delivery__blockTitle">
          Доставка та оплата
        </p>
        <ul className="delivery__list">
          {delArr.map(item => (
            <li className="delivery__item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
