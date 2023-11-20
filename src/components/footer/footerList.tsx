import { Category } from '@/types'
import Link from 'next/link'
import React from 'react'

export default function FooterList({ arr }: {arr: Category[]}) {
  return (
    <ul className="footerList">
      {arr.map((item: Category) => (
        <li 
          className="footerList__item" 
          key={item.id}
        >
          <Link 
            href={item.link} 
            className="footerList__link"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
