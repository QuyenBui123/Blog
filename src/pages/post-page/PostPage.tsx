import { Button } from "flowbite-react";
import { FaThumbsUp  } from 'react-icons/fa';
import { Link } from "react-router-dom";
import ComentSesion from "../../components/commetn";
import { useState } from "react";
import PostCard from "../../components/PostCard";

export default function PostPage() {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  const mockPost = {
    postname: 'Test',
    category: 'Technology',
    poscontent:"Environment variables play a crucial role in configuring and securing applications. In the context of Next.js, a popular React framework for building web applications, understanding how to work with environment variables is essential for managing sensitive information, such as API keys, database URLs, and other configuration settings. In this guide, we'll explore the ins and outs of using environment variables in Next.js.",
    postcontenttitle:"Defining Environment Variables",
  };
  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'>
      {mockPost.postname}
      </h1>
      <Link
        to={`/`}
        className='self-center mt-5'
      >
        <Button color='gray' pill size='xs'>
        {mockPost.category}
        </Button>
      </Link>
      <img
          src={'https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png'}
          alt='post cover'
        className='mt-10 p-3 max-h-[600px] w-full object-cover'
      />
      <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
        <span> { new Date().toLocaleDateString()}</span>
        <span className='italic'>
           5 mins read  
        </span>
      </div>
      <div className='p-3 max-w-2xl mx-auto w-full post-content'>
        {mockPost.poscontent}
        {mockPost.poscontent}
      </div>
    <div className='flex p-4 border-b dark:border-gray-600 text-sm'>
              <button
                type='button'
                onClick={handleLikeClick}
                className={` hover:text-blue-500 ${liked ? 'text-blue-500' : ''}`}
              >
                <FaThumbsUp className='text-sm' />
              </button>
              <p className='ml-2 mr-4 mt-2'>
                1 like
              </p>
      <ComentSesion/>
    </div>
      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-2xl mt-5'>Recent articles</h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'>
          <PostCard />
        </div>
      </div>
    </main>
  )
}
