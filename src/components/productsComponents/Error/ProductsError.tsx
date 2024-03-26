import React from 'react'

interface Props {
  error: string;
}

export const ProductsError: React.FC<Props> = ({ error }) => {
  return (
    <div className='main'>
        <h1>Продукти не вдалося завнтажити. Помилка: {error}</h1>
      </div>
  )
}
