import React from 'react';
import BlogArticle from '@/components/blogComponents/Article';
import { blogArr } from '@/data/blog';
import styles from './page.module.scss';

export default function page() {
  return (
    <section className={styles.blog}>
      <div className='container'>
        <h1 className={styles.blog__title}>
          Блог
        </h1>
        <div className={styles.blog__block}>
          {blogArr.map(blog => (
            <BlogArticle 
              blog={blog} 
              key={blog.article} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
