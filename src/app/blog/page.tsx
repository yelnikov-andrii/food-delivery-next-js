import React from 'react';
import BlogArticle from '../../components/blog/article';
import { blogArr } from '@/data/blogData';

export default function page() {
  return (
    <section className='blog'>
      <div className='container'>
        <h1 className='blog__title'>
          Блог
        </h1>
        <div className='blog__block'>
          {blogArr.map(blog => (
            <BlogArticle blog={blog} key={blog.article} />
          ))}
        </div>
      </div>
    </section>
  )
}
