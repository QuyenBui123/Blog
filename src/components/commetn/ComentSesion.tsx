import {  Button, Drawer, Modal, Textarea } from "flowbite-react";
import { useState } from "react";
import { FaThumbsUp  } from 'react-icons/fa';
import {HiAnnotation,} from 'react-icons/hi';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function ComentSesion() { 
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);}
    
    const handleDelete = async () => {
      setShowModal(false);
    }
  return (
    <>
      <div className="flex   justify-center">
        <HiAnnotation className="h-8 w-5 pt-1"/>
        <span onClick={handleOpen} className="pt-2 ml-2 cursor-pointer">Comment</span>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right" className="w-1/2">
        <Drawer.Header title="Comment" />
        <Drawer.Items>
        <div className='flex p-4 border-b dark:border-gray-600 text-sm'>
        <div className='flex-shrink-0 mr-3'>
        <img
          className='w-10 h-10 rounded-full bg-gray-200'
          src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
          alt='useimage'
        />
      </div>
      <div className='flex-1'>
        <div className='flex items-center mb-1'>
          <span className='font-bold mr-1 text-xs truncate'>
            NameTest
          </span>
          <span className='text-gray-500 text-xs'>
            {new Date().toLocaleDateString()}
          </span>
        </div>
            <p className='text-gray-500 pb-2'>Test comment</p>
            <div className='flex items-center pt-2 text-xs border-t dark:border-gray-700 max-w-fit gap-2'>
            <button
                type='button'
                onClick={handleLikeClick}
                className={` hover:text-blue-500 ${liked ? 'text-blue-500' : ''}`}
              >
                <FaThumbsUp className='text-sm' />
              </button>
              <p className='text-gray-400'>
                1 like
              </p>
                    <button
                      type='button'
                      className='text-gray-400 hover:text-blue-500'
                    >
                      Edit
                    </button>
                    <button
                      type='button'
                      onClick={() => setShowModal(true)}
                      className='text-gray-400 hover:text-red-500'
                    >
                      Delete
                    </button>
            </div>
            </div>
            <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to delete this comment?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button
                color='failure'
                onClick={() => handleDelete()}
              >
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
        </div>
<form className='border border-teal-500 rounded-md p-3 mt-4'>
          <Textarea
            placeholder='Add a comment...'
            rows={3}
            maxLength={2000}
          />
          <div className='flex justify-between items-center mt-5'>
            <p className='text-gray-500 text-xs'>
             characters remaining
            </p>
            <Button  pill gradientDuoTone='purpleToBlue' type='submit'>
              Submit
            </Button>
          </div>
        </form>
        </Drawer.Items>
      </Drawer>
      
    </>
  );
}
