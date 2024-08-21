import { useState } from "react";

import {
  HiAnnotation,
  HiArrowNarrowUp,
  HiDocumentText,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";

const mockPost = {
  postname: "Test",
  category: "Technology",
  postcontent:
    "On this blog, you'll find weekly articles and tutorials on topics such as web development, software engineering, and programming languages. Sahand is always learning and exploring new technologies so be sure to check back often for new content!",
  image:
    "https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png",
  title: "Test",
  slug: "123",
};

export default function DashboardComp() {
  const [users] = useState([1]);
  const [comments] = useState([1]);
  const [posts] = useState([1]);
  const [totalUsers] = useState(3);
  const [totalPosts] = useState(3);
  const [lastMonthUsers] = useState(0);
  const [lastMonthPosts] = useState(0);
  const [lastMonthComments] = useState(0);

  return (
    <div className="p-3 md:mx-auto">
      <div className="flex-wrap flex gap-4 justify-center">
        <div className="flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md">
          <div className="flex justify-between">
            <div>
              <h3 className="text-gray-500 text-md uppercase">Total Users</h3>
              <p className="text-2xl">{totalUsers}</p>
            </div>
            <HiOutlineUserGroup className="bg-teal-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-500 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthUsers}
            </span>
            <div className="text-gray-500">Last month</div>
          </div>
        </div>
        <div className="flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md">
          <div className="flex justify-between">
            <div>
              <h3 className="text-gray-500 text-md uppercase">
                Total Comments
              </h3>
              <p className="text-2xl">3</p>
            </div>
            <HiAnnotation className="bg-indigo-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-500 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthComments}
            </span>
            <div className="text-gray-500">Last month</div>
          </div>
        </div>
        <div className="flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md">
          <div className="flex justify-between">
            <div>
              <h3 className="text-gray-500 text-md uppercase">Total Posts</h3>
              <p className="text-2xl">{totalPosts}</p>
            </div>
            <HiDocumentText className="bg-lime-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-500 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthPosts}
            </span>
            <div className="text-gray-500">Last month</div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 py-3 mx-auto justify-center">
        <div className="flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800">
          <div className="flex justify-between p-3 text-sm font-semibold">
            <h1 className="text-center p-2">Recent users</h1>
            <Button outline gradientDuoTone="purpleToPink">
              <Link to="/dashboard?tab=users">See all</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>User image</Table.HeadCell>
              <Table.HeadCell>Username</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {users &&
                users.map((_, index) => (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={`user-${index}`}
                  >
                    <Table.Cell>
                      <img
                        src="https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png"
                        alt="user"
                        className="w-10 h-10 rounded-full bg-gray-500"
                      />
                    </Table.Cell>
                    <Table.Cell>{/* Insert username here */}</Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>

        <div className="flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800">
          <div className="flex justify-between p-3 text-sm font-semibold">
            <h1 className="text-center p-2">Recent comments</h1>
            <Button outline gradientDuoTone="purpleToPink">
              <Link to="/dashboard?tab=comments">See all</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Comment content</Table.HeadCell>
              <Table.HeadCell>Likes</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {comments &&
                comments.map((_, index) => (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={`comment-${index}`}
                  >
                    <Table.Cell className="w-96">
                      <p className="line-clamp-2">good</p>
                    </Table.Cell>
                    <Table.Cell>4</Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>

        <div className="flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800">
          <div className="flex justify-between p-3 text-sm font-semibold">
            <h1 className="text-center p-2">Recent posts</h1>
            <Button outline gradientDuoTone="purpleToPink">
              <Link to="/dashboard?tab=posts">See all</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Post image</Table.HeadCell>
              <Table.HeadCell>Post Title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {posts &&
                posts.map((_, index) => (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={`post-${index}`}
                  >
                    <Table.Cell>
                      <img
                        src="https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png"
                        alt="user"
                        className="w-14 h-10 rounded-md bg-gray-500"
                      />
                    </Table.Cell>
                    <Table.Cell className="w-96">
                      {mockPost.postcontent}
                    </Table.Cell>
                    <Table.Cell className="w-5">{mockPost.category}</Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}
