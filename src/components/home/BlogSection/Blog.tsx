import React from 'react';
import { BlogPost, blogPosts } from '@/constants/blogData';

export function Blog() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="inline-block px-4 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-full mb-4">
              RECENT BLOG
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              From the InstaPlumbers Blog
            </h2>
          </div>
          <button className="hidden md:block px-6 py-3 text-sm font-medium text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300">
            VIEW ALL POST
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post: BlogPost) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute bottom-4 right-4 px-3 py-1 text-xs font-medium text-blue-600 bg-white rounded-full">
                  {post.date}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium">{post.category}</span>
                  <span className="mx-2">/</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button className="px-6 py-3 text-sm font-medium text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300">
            VIEW ALL POST
          </button>
        </div>
      </div>
    </section>
  );
}
