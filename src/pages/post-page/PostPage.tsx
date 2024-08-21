import React, { useEffect, useState } from "react";
import { Avatar, Button, HR } from "flowbite-react";
// import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { marked } from "marked";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";
import Sidebar from "../../components/Sidebar";
import ComentSesion from "../../components/commetn";
import Related from "../../components/Sidebar/Related";

const Postpage: React.FC = () => {
  // const [liked, setLiked] = useState(false);
  const [, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const now = Date.now();
      const minutesElapsed = Math.floor((now - startTime) / 60000);
      setElapsedTime(minutesElapsed);
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // const handleLikeClick = () => {
  //   setLiked(!liked);
  // };

  const mockPost = {
    postname: "Modern and colorful style of caricatures created by AI",
    category: "Technology",
    poscontent: `## 1. The Growth of Web3 Technologies ![Web3](https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg) Web3 is no longer just a buzzword. The decentralized web is becoming more mainstream, with blockchain technology at the forefront. Developers are focusing on building decentralized applications (dApps) that offer greater transparency, security, and user control. 
    The Clever Border Collie
The Border Collie is often considered one of the smartest dog breeds. They excel in tasks that require quick thinking, learning, and problem-solving. Border Collies are frequently used in herding and agility competitions due to their remarkable intelligence.

The Remarkable Dolphins: “Dolphins are like the geniuses of the sea, showcasing problem-solving abilities that continue to astonish researchers.” – Dr. Sarah Johnson, Marine Biologist
The Crafty Corvids: “Corvids, with their intelligence and adaptability, are nature’s clever problem-solvers.” – Dr. James Peterson, Ornithologist
The Enigmatic Octopus: “Octopuses’ ability to navigate mazes and change their appearance at will demonstrates a level of intelligence that fascinates scientists.” – Dr. Emily Adams, Marine Biologist
The Agile Border Collie: “Border Collies have an exceptional capacity for learning and problem-solving, making them outstanding companions and working dogs.” – Emma Williams, Canine Trainer
In conclusion, the animal kingdom is a treasure trove of intelligence, with each species revealing unique cognitive abilities that continue to captivate and inspire us.

Whether it’s the problem-solving prowess of dolphins, the craftiness of corvids, the enigma of octopuses, or the agility of Border Collies, these creatures remind us of the wonders of nature and its boundless capacity for intelligence and adaptability.`,
    postcontenttitle: "Defining Environment Variables",
  };

  const postContentHTML = marked(mockPost.poscontent);
  const postDate = new Date("2023-10-21");
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-wrap mt-5">
      <div className="w-full lg:w-3/4 px-4">
        {/* Post Image */}
        <img
          src="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
          alt="post cover"
          className="max-h-[600px] w-full object-cover rounded-3xl"
        />

        {/* Post Title */}
        <h1 className="text-4xl md:text-3xl sm:text-2xl font-semibold mt-10 p-3 text-center max-w-2xl mx-auto lg:text-4xl">
          {mockPost.postname}
        </h1>

        {/* Author Info */}
        <div className="flex justify-center items-center overflow-hidden">
          <Avatar
            alt="user"
            img="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/12/avatar-1.webp"
            rounded
            size="md"
            className="pr-2"
          />
          By{" "}
          <span className="ml-2 mr-2 text-red-500">
            {currentUser?.username}
          </span>
          <span className="ml-2 mr-2 text-red-500">~</span>
          <span>{formatDate(postDate)}</span>
        </div>

        {/* Category Button */}
        <Link to="/" className="justify-center flex self-center mt-5">
          <Button color="gray" pill size="xs">
            {mockPost.category}
          </Button>
        </Link>

        {/* Divider */}
        <HR />

        {/* Post Content */}
        <div className="p-3 max-w-2xl mx-auto w-full post-content">
          <div dangerouslySetInnerHTML={{ __html: postContentHTML }} />
        </div>
        <HR />
        <div className="flex justify-between flex-wrap">
          <div>
            <span className="text-base font-semibold">Categorized in:</span>
            <a href="" className="text-red-500">
              {" "}
              Buildings,
            </a>
            <a href="" className="text-red-500">
              {" "}
              Technology
            </a>
          </div>
          <div>
            <span className="ml-2 mr-2 text-red-500">~</span>
            <span className="text-base font-semibold mr-2">
              Lasted Updated:
            </span>
            <span>{formatDate(postDate)}</span>
          </div>
        </div>
        <HR />
        {/* Author Section */}
        <div className="pt-20 pl-10">
          <div className="text-2xl font-semibold">About the Author</div>
          <div className="sm:flex p-4 shadow-md rounded-lg overflow-hidden mt-10">
            <Avatar
              alt="user"
              img="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/12/avatar-1.webp"
              rounded
              size="2xl"
              className="mr-8"
            />
            <div className="w-full max-w-[440px] h-auto flex flex-col justify-between">
              <span className="mr-2 text-2xl font-semibold">
                {currentUser?.username}
              </span>
              <span>
                Hello! My name is Adriana Martins, working from Chile. I create
                some Ghost and Wordpress themes for different markets, also, I
                offer live support via our ticket system.
              </span>
              <div className="overflow-hidden sm:flex max-w-xs justify-between">
                <Link to="/">
                  <span className="flex">
                    <BsFacebook className="mr-2 text-blue-600" /> Facebook
                  </span>
                </Link>
                <Link to="/">
                  <span className="flex">
                    <BsInstagram className="mr-2" />
                    Instagram
                  </span>
                </Link>
                <Link to="/">
                  <span className="flex">
                    <BsTiktok className="mr-2" />
                    Tiktok
                  </span>
                </Link>
              </div>
              <div className="flex justify-between items-center">
                <Link to="/PostPage">
                  <Button href="#" gradientMonochrome="failure">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <HR />
        {/* Like Button */}
        <div className="p-4 border-b dark:border-gray-600 text-sm">
          <ComentSesion />
        </div>
        <div className="pl-10 pt-10">
          <div className="text-2xl font-semibold">Related Articles</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Related
              title="Modern and colorful style of caricatures created by AI"
              excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
              imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
            />
            <Related
              title="Modern and colorful style of caricatures created by AI"
              excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
              imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
            />
            <Related
              title="Modern and colorful style of caricatures created by AI"
              excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
              imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
            />
            <Related
              title="Modern and colorful style of caricatures created by AI"
              excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
              imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
            />
          </div>
        </div>
      </div>
      <div className="w-full hidden lg:block lg:w-1/4 pl-4">
        <Sidebar />
      </div>
    </div>
  );
};

export default Postpage;
