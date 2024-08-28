import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, Dropdown } from "flowbite-react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import SearchBar from "./Search";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Meta
          </span>
          Blog
        </Link>

        {/* Search Bar */}
        <div className="flex-1 mx-4 ">
          <SearchBar onSearch={(query) => console.log("Tìm kiếm:", query)} />
        </div>
        <div className="md:hidden flex items-center mr-2">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}{" "}
            {/* Toggle between open/close icons */}
          </button>
        </div>
        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex items-center space-x-6 mr-4 bg-white md:bg-transparent absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto py-4 md:py-0 shadow-md md:shadow-none`}
        >
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-800 block md:inline"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-gray-600 hover:text-gray-800 block md:inline"
          >
            Blog
          </Link>
          <Link
            to="/pos"
            className="text-gray-600 hover:text-gray-800 block md:inline"
          >
            Create Post
          </Link>
        </nav>

        <div className=" md:flex items-center">
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <Link
                  to="/profile-page"
                  className="hover:text-blue-500 flex justify-center items-center"
                >
                  <Avatar
                    alt="user"
                    img={currentUser.profilePicture}
                    size="sm"
                    rounded
                  />
                  <span className="block text-sm ml-2">
                    {currentUser.username}
                  </span>
                </Link>
              </Dropdown.Header>
              <Dropdown.Item as={Link} to="/dashboard?tab=profile">
                Profile
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/">Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button gradientMonochrome="purple">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
