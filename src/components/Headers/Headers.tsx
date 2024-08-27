import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
// import { FaSearch, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
// import { FaSun, FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";
// import { toggleTheme } from "../../redux/theme/ThemeSlice";
import { RootState } from "../../redux/store";

export interface UserState {
  currentUser: {
    username: string;
    email: string;
    profilePicture: string;
  } | null;
}
export interface ThemeState {
  theme: "light" | "dark";
}
export default function Header() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { theme } = useSelector((state: RootState) => state.theme);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleNavigateCreatPost = () => {
    navigate("/Pos");
  };
  const handleNavigatePost = () => {
    navigate("/blog");
  };
  return (
    <Navbar fluid rounded className="border-b-2 ">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Meta
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        {/* <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
          >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
          
        </Button> */}
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header className="bg-pink-50">
              <Link to="/ProfilePage" className=" hover:text-blue-500 ">
                <span className="block text-sm ">{currentUser.username}</span>

                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Link>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item className="bg-pink-50">Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item href="/" className="bg-pink-50">
              Sign out
            </Dropdown.Item>
          </Dropdown>
          
        ) : (
          <Link to="/SignIn">
            <Button gradientDuoTone="purpleToBlue" pill>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {" "}
        {/*  className='md:block ' */}
        <Navbar.Link onClick={handleNavigateHome} className="cursor-pointer ">
          Home
        </Navbar.Link>
        <Navbar.Link
          onClick={handleNavigateCreatPost}
          className="cursor-pointer "
        >
          Create Post
        </Navbar.Link>
        <Navbar.Link onClick={handleNavigatePost} className="cursor-pointer ">
          Blog
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    // <header className="bg-white border-b border-gray-200 shadow-md">
    //         <div className="container mx-auto flex justify-between items-center py-4 px-6">
    //             {/* Logo */}
    //             <div className="flex items-center">
    //                 <Link to="/" className="text-2xl font-bold text-gray-800">
    //                     MyBlog
    //                 </Link>
    //             </div>

    //             {/* Navigation */}
    //             <nav className="hidden md:flex space-x-6">
    //                 <Link to="/" className="text-gray-600 hover:text-gray-800">
    //                     Home
    //                 </Link>
    //                 <Link to="/about" className="text-gray-600 hover:text-gray-800">
    //                     About
    //                 </Link>
    //                 <Link to="/blog" className="text-gray-600 hover:text-gray-800">
    //                     Blog
    //                 </Link>
    //                 <Link to="/contact" className="text-gray-600 hover:text-gray-800">
    //                     Contact
    //                 </Link>
    //             </nav>

    //             {/* Search and Social Icons */}
    //             <div className="flex items-center space-x-4">
    //                 <FaSearch className="text-gray-600 cursor-pointer hover:text-gray-800" />

    //                 <a href="#" className="text-gray-600 hover:text-blue-600">
    //                     <FaFacebookF />
    //                 </a>
    //                 <a href="#" className="text-gray-600 hover:text-blue-400">
    //                     <FaTwitter />
    //                 </a>
    //                 <a href="#" className="text-gray-600 hover:text-pink-500">
    //                     <FaInstagram />
    //                 </a>
    //             </div>
    //         </div>
    //     </header>
  );
}
