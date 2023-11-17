import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function BlogArticle({ blog }: any) {
  return (
    <div className="blogArticle">
      <Image 
        src={blog.img} alt="" 
        className="blogArticle__img"
        width={300}
        height={300}
      />
      <p className="blogArticle__date">
        {blog.data}
      </p>
      <p className="blogArticle__name">
        {blog.name}
      </p>
      <p className="blogArticle__preview">
        {blog.preview}
      </p>
      <Link 
        href={`/blog/${blog.link}`} 
        className="blogArticle__link"
      >
        Читати далі
      </Link>
    </div>
    );
}
