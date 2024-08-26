// src/components/PostCard.tsx
import { Avatar, Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { BsBook } from "react-icons/bs";
import { Link } from "react-router-dom";
import ThreeDotMenu from "../ThreeDotMenu";

export interface PostCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
}
export interface UserState {
  currentUser: {
    username: string;
    email: string;
    profilePicture: string;
  } | null;
}

const PostCardnew: React.FC<PostCardProps> = ({ title, excerpt, imageUrl }) => {
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
    <div className="  sm:flex shadow-md rounded-lg overflow-hidden mb-20 ">
      <div>
        <img
          src={imageUrl}
          alt={title}
          className="w-full max-w-full h-auto rounded-lg object-cover max-h-80 "
        />
      </div>
      <div className="p-5 w-full  h-auto  rounded-lg flex flex-col justify-between ">
        <div className=" flex justify-between">
          <h2 className="text-2xl font-semibold text-primary">{title}</h2>
          <ThreeDotMenu />
        </div>

        <div className=" flex flex-wrap  items-center overflow-hidden">
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
        <p className="text-secondary mt-2">{excerpt}</p>
        <div className="flex justify-between items-center ">
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
  );
};

export default PostCardnew;
