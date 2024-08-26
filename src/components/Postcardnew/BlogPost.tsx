// components/BlogPost.tsx
import React from "react";

interface BlogPostProps {
  title: string;
  excerpt: string;
  imageUrl: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, imageUrl }) => {
  return (
    <article className="bg-white shadow-md rounded mb-4 p-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{excerpt}</p>
    </article>
  );
};

export default BlogPost;
