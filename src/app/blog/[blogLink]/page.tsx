import { blogArr } from '@/data/blogData';
import Image from 'next/image';
import React from 'react';
import styles from './page.module.scss';

export default function BlogItem({
  params: { blogLink },
}: {
  params: { blogLink: string }
}) {
  const blog = blogArr.find(blog => blog.link === blogLink);
  return (
      <div className={styles.blogItem}>
        <div className="container">
          <h1 className={styles.blogItem__title}>
            {blog?.name}
          </h1>
          <p className={styles.blogItem__data}>
            {blog?.data}
          </p>
          <Image 
            src={blog?.img || ''} 
            alt="" 
            className={styles.blogItem__img}
            width={300}
            height={300}
          />
          <p className={styles.blogItem__description}>
            {blog?.article}
          </p>
        </div>
      </div>
  );
}
