import { useState } from "react";
import { FaUserCheck, FaUserPlus } from "react-icons/fa";
import { Avatar, Button } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import { RootState } from '../../redux/store';
import PostCardnew from "../../components/Postcardnew";
import Sidebar from "../../components/Sidebar";

const ProfilePage = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  // const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const author = {
    name: "Adriana Martins ",
    avatarUrl:
      "https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/12/avatar-1.webp",
    bio: "Hello! My name is Adriana Martins working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.",
    social: {
      facebook: "https://facebook.com/author-profile",
      instagram: "https://instagram.com/author-profile",
      tiktok: "https://t",
    },
  };
  return (
    <div>
      <div className="mx-4 sm:mx-8 md:mx-12  lg:mx-24 px-5 mb-20 mt-8">
        <div className="flex flex-col sm:flex-row items-center  shadow-2xl rounded-lg p-6 md:p-10 bg-orange-50">
          <Avatar
            alt={author.name}
            img={author.avatarUrl}
            rounded
            size="2xl"
            className="mb-4  mr-4"
          />
          <div className="flex flex-col justify-center max-w-[520px] w-full">
            <h1 className="text-2xl md:text-3xl font-bold">{author.name}</h1>
            <p className="mt-2 text-base md:text-lg">{author.bio}</p>
            <div className="flex flex-wrap mt-4 gap-3 ">
              <Link
                to={author.social.facebook}
                className="flex items-center text-sm"
              >
                <BsFacebook className="text-blue-600 text-lg mr-2" /> Facebook
              </Link>
              <Link
                to={author.social.instagram}
                className="flex items-center text-sm"
              >
                <BsInstagram className="text-pink-600 text-lg mr-2" /> Instagram
              </Link>
              <Link
                to={author.social.tiktok}
                className="flex items-center text-sm"
              >
                <BsTiktok className="text-black text-lg mr-2" /> TikTok
              </Link>
            </div>
            <div className="flex mt-4">
              {/* Follow Button */}
              <Button
                onClick={handleFollowClick}
                className={` w-auto h-8 px-4 py-2 rounded-full flex items-center transition-colors duration-300 
            ${
              isFollowing
                ? "bg-green-500 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
              >
                {isFollowing ? (
                  <FaUserCheck className="mr-2 " />
                ) : (
                  <FaUserPlus className="mr-2" />
                )}
                {isFollowing ? "Following" : "Follow"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-1 container mx-auto px-4 py-8">
          <main className="w-full lg:w-3/4 px-4">
            <PostCardnew
              title="Modern and colorful style of caricatures created by AI"
              excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
              imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
            />
            <PostCardnew
              title="Modern and colorful style of caricatures created by AI"
              excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
              imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
            />
            <PostCardnew
              title="Modern and colorful style of caricatures created by AI"
              excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
              imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
            />
            <PostCardnew
              title="Modern and colorful style of caricatures created by AI"
              excerpt="Caricatures have long been a beloved form of art and satire. With the advent of artificial intelligence (AI), the world…"
              imageUrl="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-660x660.webp"
            />
          </main>
          <aside className="w-full hidden lg:block lg:w-1/4 px-4">
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>

  );
};

export default ProfilePage;
