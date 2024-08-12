import { Modal, Table, Button } from 'flowbite-react';
import {  useState } from 'react';

import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function DashUsers() {
  const [showModal, setShowModal] = useState(false);
  const handleShowMore = async () => {
  };
  const handleDeleteUser = async () => {
  };

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
     
        
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Date created</Table.HeadCell>
              <Table.HeadCell>User image</Table.HeadCell>
              <Table.HeadCell>Username</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Admin</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            
              <Table.Body className='divide-y' key=''>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>
                    {new Date().toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                      alt='{user.username}'
                      className='w-10 h-10 object-cover bg-gray-500 rounded-full'
                    />
                  </Table.Cell>
                  <Table.Cell>123</Table.Cell>
                  <Table.Cell>123@gmail.com</Table.Cell>
                  <Table.Cell>
                    
                      <FaCheck className='text-green-500' />
                    
                      {/* <FaTimes className='text-red-500' /> */}
                    
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>
                    {new Date().toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                      alt='{user.username}'
                      className='w-10 h-10 object-cover bg-gray-500 rounded-full'
                    />
                  </Table.Cell>
                  <Table.Cell>123</Table.Cell>
                  <Table.Cell>123@gmail.com</Table.Cell>
                  <Table.Cell>
                    
                      {/* <FaCheck className='text-green-500' /> */}
                    
                      <FaTimes className='text-red-500' />
                    
                  </Table.Cell>
                  <Table.Cell>
                    <span
                      className='font-medium text-red-500 hover:underline cursor-pointer'
                    >
                      Delete
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
           
          </Table>
            <button
              onClick={handleShowMore}
              className='w-full text-teal-500 self-center text-sm py-7'
            >
              Show more
            </button>
          
        
      
        {/* <p>You have no users yet!</p> */}
    
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
              Are you sure you want to delete this user?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleDeleteUser}>
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
  );
}