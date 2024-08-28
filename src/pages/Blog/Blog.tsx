
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Badge, Button } from "flowbite-react";

export const categories = [
  { id: 2, name: "Buildings" },
  { id: 3, name: "Technology" },
  { id: 1, name: "Sports" },
  { id: 4, name: "Nature" },
  { id: 5, name: "Design" },
];

export const posts = [
  {
    id: 1,
    title: "How to Use AI to Improve Your Caricature Art",
    excerpt: "Caricatures have long been a beloved form of art and satire...",
    imageUrl:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp",
    categoryIds: [1, 5],
  },
  {
    id: 1,
    title: "How to Use AI to Improve Your Caricature Art",
    excerpt: "Caricatures have long been a beloved form of art and satire...",
    imageUrl:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp",
    categoryIds: [1, 3],
  },
  {
    id: 1,
    title: "How to Use AI to Improve Your Caricature Art",
    excerpt: "Caricatures have long been a beloved form of art and satire...",
    imageUrl:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp",
    categoryIds: [4, 3],
  },
  {
    id: 1,
    title: "How to Use AI to Improve Your Caricature Art",
    excerpt: "Caricatures have long been a beloved form of art and satire...",
    imageUrl:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp",
    categoryIds: [2, 3],
  },

];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const badgeColors = [
    "gray", 
    "failure", 
    "success", 
    "warning", 
    "indigo",
  ];
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categoryIds.includes(selectedCategory))
    : posts;

  const getBadgeColor = (index: number) =>
    badgeColors[index % badgeColors.length];
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Posts</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        <Badge className="text-base cursor-pointer">Categories:</Badge>
        <Badge
          color={!selectedCategory ? "primary" : "info"}
          className="text-sm cursor-pointer"
          onClick={() => setSelectedCategory(null)}
        >
          All
        </Badge>
        {categories.map((category, index) => (
          <Badge
            key={category.id}
            color={
              selectedCategory === category.id
                ? "primary"
                : getBadgeColor(index)
            }
            className=" text-sm cursor-pointer"
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <div key={post.id} className="rounded-lg shadow-lg overflow-hidden">
            <Link to={`/post/${post.id}`}>
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4">
              <Link to={`/post/${post.id}`}>
                <h3 className="text-xl font-bold mb-2 hover:text-blue-500">
                  {post.title}
                </h3>
              </Link>
              <div className="mb-2 flex items-center overflow-hidden">
                <Avatar
                  alt="user"
                  img="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/12/avatar-1.webp"
                  rounded
                  size="sm"
                  className="pr-2"
                />
                By
                <span className="ml-2 mr-2 text-red-500 hover:text-gray-800">
                  Username
                </span>
                <span className="ml-2 mr-2 text-red-500">~</span>
                <span>October 21, 2023</span>
              </div>
              <p className="text-gray-600">{post.excerpt}</p>
              <div className="flex mt-2 justify-between items-center">
                <Link to={`/post/${post.id}`}>
                  <Button href="#" gradientMonochrome="failure">
                    Read More
                  </Button>
                </Link>
                <span className="flex items-center">
                  5 min read
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
