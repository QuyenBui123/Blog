import { useState } from 'react';
import {FaUserCheck, FaUserPlus } from 'react-icons/fa';
import {  Avatar, Sidebar } from 'flowbite-react';
import About from '../About';
import { Link } from 'react-router-dom';
import ThreeDotMenu from '../../components/ThreeDotMenu';

const ProfilePage = () => {
    const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cover Photo */}
      <div className="relative bg-gray-800 h-48">
        <img
          src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-bia-dep-10.jpg"
          alt="Cover"
          className="object-cover w-full h-48"
        />
      </div>
      
        {/* Profile Section */}
      <div className="flex flex-col p-4 mt-[-5rem] transform">
        {/* Profile Picture */}
        <div className='flex mt-5'> 
        {/* <img
          src="https://dthezntil550i.cloudfront.net/n4/latest/n41611050401464760001833695/1280_960/1128ba0a-efcb-4370-97cf-7704d4c0555d.png"
          alt="Profile"
          className="w-32 h-32  rounded-full border-4 border-white shadow-md"
        /> */}
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
        <button 
            onClick={handleFollowClick} 
            className={` w-auto h-8 px-4 py-2 rounded-full flex items-center transition-colors duration-300 
            ${isFollowing ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>
            {isFollowing ? <FaUserCheck className="mr-2" /> : <FaUserPlus className="mr-2" />} 
            {isFollowing ? 'Following' : 'Follow'}
          </button>
      </div>
      </div>
      <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
      <Sidebar className='w-full md:w-56 text-center'>
      <About/>
    </Sidebar>
    </div>
    <div className='max-w-6xl mx-auto ml-5 p-3 flex flex-col gap-8 py-7'>
      <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            {/*port card  */}
      <div className='flex flex-wrap gap-6 '>
            
        <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
      <Link to={`/PortPage`}>
        <img
          src={'https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png'}
          alt='post cover'
          className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
        
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <div className='flex justify-between'><p className='text-lg font-semibold line-clamp-2'>Test port </p><ThreeDotMenu/></div>
        <span className='italic text-sm'>Technology</span>
        <Link
          to={`/PortPage`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Read article
        </Link>
      </div>
    </div>
    <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
      <Link to={`/PortPage`}>
        <img
          src={'https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png'}
          alt='post cover'
          className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
      <div className='flex justify-between'><p className='text-lg font-semibold line-clamp-2'>Test port </p><ThreeDotMenu/></div>
        <span className='italic text-sm'>Technology</span>

        <Link
          to={`/PortPage`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Read article
        </Link>
      </div>
    </div>
    <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
      <Link to={`/PortPage`}>
        <img
          src={'https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png'}
          alt='post cover'
          className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
      <div className='flex justify-between'><p className='text-lg font-semibold line-clamp-2'>Test port </p><ThreeDotMenu/></div>
        <span className='italic text-sm'>Technology</span>
        <Link
          to={`/PortPage`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Read article
        </Link>
      </div>
    </div>
    <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
      <Link to={`/PortPage`}>
        <img
          src={'https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png'}
          alt='post cover'
          className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
      <div className='flex justify-between'><p className='text-lg font-semibold line-clamp-2'>Test port </p><ThreeDotMenu/></div>
        <span className='italic text-sm'>Technology</span>
        <Link
          to={`/PortPage`}
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
        >
          Read article
        </Link>
      </div>
    </div>
            </div>
      {/*port card  */}
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