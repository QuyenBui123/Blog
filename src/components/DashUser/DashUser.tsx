import { Modal, Table, Button } from "flowbite-react";
import { useState } from "react";

import { HiOutlineExclamationCircle } from "react-icons/hi";
// import { FaCheck, FaTimes } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TableRowComponent from "./TableRow";

export interface User {
  profilePicture: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

export default function DashUsers() {
  const [showModal, setShowModal] = useState(false);
  const [, setSelectedUser] = useState<User | null>(null);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const handleShowMore = async () => {};

  const handleDeleteUser = async () => {
    setShowModal(false);
  };

  const handleOpenDeleteModal = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const users: User[] = [];
  if (currentUser) {
    users.push(currentUser);
  }
  users.push(
    {
      profilePicture: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      username: "123",
      email: "123@gmail.com",
      isAdmin: false,
    },
    {
      profilePicture: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      username: "123",
      email: "123@gmail.com",
      isAdmin: true,
    },
    {
      profilePicture: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      username: "123",
      email: "123@gmail.com",
      isAdmin: false,
    }
  );

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      <Table hoverable className="shadow-md">
        <Table.Head>
          <Table.HeadCell>Date created</Table.HeadCell>
          <Table.HeadCell>User image</Table.HeadCell>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Admin</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y" key="">
          {users.map((user, index) => (
            <TableRowComponent
              key={index}
              user={user}
              onDelete={() => handleOpenDeleteModal(user)}
            />
          ))}
        </Table.Body>
      </Table>
      <button
        onClick={handleShowMore}
        className="w-full text-teal-500 self-center text-sm py-7"
      >
        Show more
      </button>
      {/* <p>You have no users yet!</p> */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this user?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteUser}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
