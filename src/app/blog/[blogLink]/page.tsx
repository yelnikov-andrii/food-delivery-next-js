import { blogArr } from '@/app/data/blogData'
import Image from 'next/image';
import React from 'react'

export default function BlogItem({
  params: { blogLink },
}: {
  params: { blogLink: string }
}) {
  const blog = blogArr.find(blog => blog.link === blogLink);
  return (
      <div className="blogItem">
        <div className="container">
          <h1 className="blogItem__title">
            {blog?.name}
          </h1>
          <p className="blogItem__data">
            {blog?.data}
          </p>
          <Image 
            src={blog?.img || ''} 
            alt="" 
            className="blogItem__img"
            width={300}
            height={300}
          />
          <p className="blogItem__description">
            {blog?.article}
          </p>
        </div>
      </div>
  );
}
