import { useState } from 'react';
import {FaUserCheck, FaUserPlus } from 'react-icons/fa';
import {  Avatar, Button, Carousel, HR, Sidebar } from 'flowbite-react';
import About from '../About';
import { Link } from 'react-router-dom';
import PostCard from '../../components/PostCard';

const ProfilePage = () => {
    const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <div className="relative bg-gray-800 h-48">
        <img
          src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-bia-dep-10.jpg"
          alt="Cover"
          className="object-cover w-full h-48"
        />
      </div> */}
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel indicators={false} leftControl=" " rightControl=" "> 
        <img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-bia-dep-10.jpg" />
      </Carousel>
      </div>
      <div className="flex flex-col p-4 mt-[-5rem] transform">
        {/* Profile Picture */}
        <div className='flex mt-5'> 
        <div className="flex flex-wrap gap-2">
        <Avatar img="https://dthezntil550i.cloudfront.net/n4/latest/n41611050401464760001833695/1280_960/1128ba0a-efcb-4370-97cf-7704d4c0555d.png" size="xl" rounded bordered />
        </div>
        {/* Username and Bio */}
        <div className="mt-16 ml-4 ">
          <h1 className="text-2xl font-bold">Test</h1>
        </div>
      </div>
      <div className='flex justify-end   '>
        {/* Follow Button */}
        <Button 
            onClick={handleFollowClick} 
            className={` w-auto h-8 px-4 py-2 rounded-full flex items-center transition-colors duration-300 
            ${isFollowing ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>
            {isFollowing ? <FaUserCheck className="mr-2 " /> : <FaUserPlus className="mr-2" />} 
            {isFollowing ? 'Following' : 'Follow'}
          </Button>
      </div>
      <HR/>
      </div>
      <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
      <Sidebar className='w-full md:w-56 text-center '>
      <About/>
    </Sidebar>
    <HR className='block md:hidden'/>
    </div>
    <div className='max-w-6xl mx-auto ml-5 p-3 flex flex-col gap-8 py-7'>
      <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <PostCard/>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link> 
      </div>
      </div>
        
    </div>
    </div>
    
  );
};

export default ProfilePage;