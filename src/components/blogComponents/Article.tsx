import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './article.module.scss';

export default function BlogArticle({ blog }: any) {
  return (
    <div className={styles.blogArticle}>
      <div className={styles.blogArticle__imgWrapper}>
      <Image 
        src={blog.img} alt="" 
        className={styles.blogArticle__img}
        width={100}
        height={100}
        layout='responsive'
      />
      </div>
      <p className={styles.blogArticle__date}>
        {blog.data}
      </p>
      <p className={styles.blogArticle__name}>
        {blog.name}
      </p>
      <p className={styles.blogArticle__preview}>
        {blog.preview}
      </p>
      <Link 
        href={`/blog/${blog.link}`} 
        className={styles.blogArticle__link}
      >
        Читати далі
      </Link>
    </div>
    );
}
