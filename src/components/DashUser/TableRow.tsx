import { Table } from "flowbite-react";
import { FaCheck, FaTimes } from "react-icons/fa";

interface User {
  profilePicture: string;
  username: string;
  email: string;
  isAdmin: boolean;
}
interface TableRowProps {
  user: User;
  onDelete: () => void;
}
const TableRowComponent: React.FC<TableRowProps> = ({ user, onDelete }) => {
  if (!user) {
    return null;
  }
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>{new Date().toLocaleDateString()}</Table.Cell>
      <Table.Cell>
        <img
          src={user.profilePicture}
          alt={user.username}
          className="w-10 h-10 object-cover bg-gray-500 rounded-full"
        />
      </Table.Cell>
      <Table.Cell>{user.username}</Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>
        {user.isAdmin ? (
          <FaCheck className="text-green-500" />
        ) : (
          <FaTimes className="text-red-500" />
        )}
      </Table.Cell>
      <Table.Cell>
        <span
          onClick={onDelete}
          className="font-medium text-red-500 hover:underline cursor-pointer"
        >
          Delete
        </span>
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRowComponent;
