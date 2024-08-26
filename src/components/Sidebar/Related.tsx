// components/BlogPost.tsx
import React from "react";

interface RelatedProps {
  title: string;
  excerpt: string;
  imageUrl: string;
}
const postDate = new Date("2023-10-21");

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Related: React.FC<RelatedProps> = ({ title, imageUrl }) => {
  return (
    <article className="flex flex-col md:flex-row justify-between gap-4 mt-4 max-w-80">
      <img
        src={imageUrl}
        alt={title}
        className="w-full md:w-1/3 h-auto rounded-lg object-cover max-h-28"
      />
      <div className="flex-1 flex flex-col justify-between">
        <a href="/PostPage">
          <h4 className="font-medium font-semibold">{title}</h4>
        </a>
        <div>
          <span className="mr-2 text-red-500">~</span>
          <span className="text-sm">{formatDate(postDate)}</span>
        </div>
      </div>
    </article>
  );
};

export default Related;
