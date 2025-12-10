"use client";

import React, { FC } from "react";

interface BlogCardProps {
  title: string;
  excerpt: string;
}

const BlogCard: FC<BlogCardProps> = ({ title, excerpt }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition bg-white">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{excerpt}</p>
    </div>
  );
};

export default BlogCard;
