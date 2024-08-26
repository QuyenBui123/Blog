// components/BlogPost.tsx
import { Avatar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";

interface AboutProps {
  title: string;
  excerpt: string;
  imageUrl: string;
}

const About: React.FC<AboutProps> = () => {
  const author = {
    name: "Adriana Martins",
    bio: "Hello! My name is Adriana Martins working from Chile. I create some Ghost and WordPress themes for different markets, also, I offer live support via our ticket system.",
    avatarUrl:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/12/avatar-1.webp",
    social: {
      facebook: "/",
      instagram: "/",
      tiktok: "/",
    },
  };
  return (
    <article>
      <div className="flex flex-col md:flex-row justify-between gap-4  mt-4">
        <div className=" flex  items-center overflow-hidden">
          <Avatar
            alt="user"
            img="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/12/avatar-1.webp"
            rounded
            size="lg"
            className=" pr-2"
          />
          <div>
            <span className="text-base font-semibold">Adriana Martins</span>
            <p className="text-sm">Founder & Editor</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p>
          Hello! My name is Adriana Martins working from Chile. I create some
          Ghost and Wordpress themes for differents markets, also, i offer live
          support via our ticket system.
        </p>
        <div className=" overflow-hidden sm:flex flex-wrap justify-center items-center mt-4 gap-3">
          <Link
            to={author.social.facebook}
            className="text-xs flex items-center"
          >
            <BsFacebook className="text-blue-600 mr-2" />
            Facebook
          </Link>
          <Link
            to={author.social.instagram}
            className="text-xs flex items-center"
          >
            <BsInstagram className="text-pink-600 mr-2 " />
            Instagram
          </Link>
          <Link to={author.social.tiktok} className="text-xs flex items-center">
            <BsTiktok className="text-black mr-2" />
            Titok
          </Link>
        </div>
      </div>
      {/* <div className="flex-1 flex flex-col justify-between">
        <a href="/PostPage">
          <h4 className="font-medium font-semibold">{title}</h4>
        </a>
        <div>
          <span className="mr-2 text-red-500">~</span>
          <span className="text-sm">{formatDate(postDate)}</span>
        </div>
      </div> */}
    </article>
  );
};

export default About;
