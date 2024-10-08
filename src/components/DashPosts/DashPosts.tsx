import { Modal, Table, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function DashPosts() {
  const mockPost = {
    postname: "Test",
    category: "Technology",
    postcontent:
      " On this blog, you'll find weekly articles and tutorials on topics such as web development software engineering, and programming languages Sahand is always learning and exploring new technologies so be sure to check back often for new content!",
    image:
      "https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png",
    title: "Test",
    slug: "uppos",
  };
  // const { currentUser } = useSelector((state) => state.user);
  // const [userPosts ] = useState([]);
  const [showMore] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {});

  const handleShowMore = async () => {};

  const handleDeletePost = async () => {
    setShowModal(false);
  };

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      <Table hoverable className="shadow-md">
        <Table.Head>
          <Table.HeadCell>Date updated</Table.HeadCell>
          <Table.HeadCell>Post image</Table.HeadCell>
          <Table.HeadCell>Post title</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Delete</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {/* {userPosts.map(() => ( */}
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>{new Date().toLocaleDateString()}</Table.Cell>
            <Table.Cell>
              <Link to={`/post/${mockPost.slug}`}>
                <img
                  src={mockPost.image}
                  alt={mockPost.title}
                  className="w-20 h-10 object-cover bg-gray-500"
                />
              </Link>
            </Table.Cell>
            <Table.Cell>
              <Link
                className="font-medium text-gray-900 dark:text-white"
                to={`/post/${mockPost.slug}`}
              >
                {mockPost.title}
              </Link>
            </Table.Cell>
            <Table.Cell>{mockPost.category}</Table.Cell>
            <Table.Cell>
              <span
                onClick={() => setShowModal(true)}
                className="font-medium text-red-500 hover:underline cursor-pointer"
              >
                Delete
              </span>
            </Table.Cell>
            <Table.Cell>
              <Link
                className="text-teal-500 hover:underline"
                to={`/${mockPost.slug}`}
              >
                <span>Edit</span>
              </Link>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
        {/* ))} */}
      </Table>
      {showMore && (
        <button
          onClick={handleShowMore}
          className="w-full text-teal-500 self-center text-sm py-7"
        >
          Show more
        </button>
      )}
      {/* <p>You have no posts yet!</p> */}

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
              Are you sure you want to delete this post?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeletePost}>
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
