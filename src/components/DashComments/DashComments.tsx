import { Modal, Table, Button } from 'flowbite-react';

import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function DashComments() {
 
  

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>

        
          <Table hoverable className='shadow-md'>
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Comment content</Table.HeadCell>
              <Table.HeadCell>Number of likes</Table.HeadCell>
              <Table.HeadCell>PostId</Table.HeadCell>
              <Table.HeadCell>UserId</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            
              <Table.Body className='divide-y' key='{comment._id}'>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>
                    {new Date().toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>Hello</Table.Cell>
                  <Table.Cell>{3}</Table.Cell>
                  <Table.Cell>{11}</Table.Cell>
                  <Table.Cell>{124}</Table.Cell>
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
                  <Table.Cell>good</Table.Cell>
                  <Table.Cell>{3}</Table.Cell>
                  <Table.Cell>{12}</Table.Cell>
                  <Table.Cell>{124}</Table.Cell>
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
              className='w-full text-teal-500 self-center text-sm py-7'
            >
              Show more
            </button>
        {/* <p>You have no comments yet!</p> */}
      <Modal
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
              <Button color='failure' >
                Yes, I'm sure
              </Button>
              <Button color='gray'>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}