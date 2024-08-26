import { Avatar, Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { BsBook } from "react-icons/bs";

const posts = [
  {
    title: "How to Use AI to Improve Your Caricature Art",
    excerpt:
      "Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world of caricature...",
    imageUrl:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp",
    link: "/post/1",
  },
  {
    title: "How to Use AI to Improve Your Caricature Art",
    excerpt:
      "Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world of caricature...",
    imageUrl:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp",
    link: "/post/1",
  },
  {
    title: "How to Use AI to Improve Your Caricature Art",
    excerpt:
      "Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world of caricature...",
    imageUrl:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp",
    link: "/post/1",
  },
  {
    title: "How to Use AI to Improve Your Caricature Art",
    excerpt:
      "Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world of caricature...",
    imageUrl:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp",
    link: "/post/1",
  },
  {
    title: "How to Use AI to Improve Your Caricature Art",
    excerpt:
      "Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world of caricature...",
    imageUrl:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp",
    link: "/post/1",
  },
  {
    title: "How to Use AI to Improve Your Caricature Art",
    excerpt:
      "Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world of caricature...",
    imageUrl:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp",
    link: "/post/1",
  },
  // Add more post objects as needed
];

const Blog = () => {
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const postDate = new Date("2023-10-21");
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  useEffect(() => {
    // Record the initial load time
    const startTime = Date.now();

    // Update elapsed time every minute (60000 milliseconds)
    const interval = setInterval(() => {
      const now = Date.now();
      const minutesElapsed = Math.floor((now - startTime) / 60000);
      setElapsedTime(minutesElapsed);
    }, 1000); // Update every second to ensure the elapsed time is updated frequently

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {posts.map((post, index) => (
          <div key={index} className=" rounded-lg shadow-lg overflow-hidden">
            <Link to={post.link}>
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
            </Link>
            <div className="p-4">
              <Link to={post.link}>
                <h3 className="text-xl font-bold mb-2  hover:text-blue-500">
                  {post.title}
                </h3>
              </Link>
              <div className="  mb-2 flex  items-center overflow-hidden">
                <Avatar
                  alt="user"
                  img="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/12/avatar-1.webp"
                  rounded
                  size="sm"
                  className=" pr-2"
                />
                By
                <span className="ml-2 mr-2 text-red-500 hover:text-gray-800">
                  {currentUser?.username}
                </span>
                <span className="ml-2 mr-2 text-red-500 ">~</span>
                <span>{formatDate(postDate)}</span>
              </div>
              <p className="text-gray-600">{post.excerpt}</p>
              <div className="flex mt-2 justify-between items-center ">
                <Link to={`/PostPage`}>
                  <Button href="#" gradientMonochrome="failure">
                    Read More
                  </Button>
                </Link>
                <span className="flex items-center">
                  <BsBook className="mr-2" /> {elapsedTime} min read
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
