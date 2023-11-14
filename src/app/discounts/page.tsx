import Image from 'next/image'
import React from 'react'

export default function Discounts() {
  return (
    <section className="discounts">
      <div className="container">
        <h1>Акції</h1>
        <div className="discounts__block">
          <Image 
            src="https://pizzalife.ua/assets/cache_image/files/images/279/2/Banner_birthday_1200x0_105.jpg" 
            alt=""
            className="discounts__img"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  )
}
