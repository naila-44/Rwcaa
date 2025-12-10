"use client";

import React from "react";
import BlogCard from "./BlogCard";

const blogs = [
  { title: "Top Web Design Trends 2025", excerpt: "Discover the latest trends in web design..." },
  { title: "Boost Your SEO", excerpt: "Learn strategies to improve your search rankings..." },
];

const BlogContent = () => {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} title={blog.title} excerpt={blog.excerpt} />
        ))}
      </div>
    </section>
  );
};

export default BlogContent;
