import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useNavigate,  } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaSun,FaMoon } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/theme/ThemeSlice';
import { RootState } from '../../redux/store';

export interface UserState {
  currentUser: {
    username: string;
    email: string;
    profilePicture: string;
  } | null;
}
export interface ThemeState {
  theme: 'light' | 'dark';
}
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useSelector((state: RootState) => state.theme);
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleNavigateCreatPost = () => {
    navigate('/Pos');
  };
  const handleNavigateTag = () => {
    navigate('/Tag');
  };

  return (
    <Navbar fluid rounded className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Meta
        </span>
        Blog
      </Link>
      <form >
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
      
      <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
          >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
          
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar size="md" alt='user' img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header className='hover:bg-gray-100 dark:hover:bg-gray-600'>
              <Link to='/ProfilePage' className='  flex items-center'>
               <Avatar alt='user' img={currentUser.profilePicture} rounded size="sm"  className=''/>
               <span className='block text-sm ml-2' >{currentUser.username}</span>
              </Link>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>  
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item href='/'>Sign out</Dropdown.Item>
          </Dropdown>
          
        ) : (
          <Link to='/SignIn'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse  > {/*  className='md:block ' */}
        <Navbar.Link onClick={handleNavigateHome} className='cursor-pointer ' >
          Home
        </Navbar.Link>
        <Navbar.Link  onClick={handleNavigateCreatPost} className='cursor-pointer '>
          Creat Post
        </Navbar.Link>
        <Navbar.Link onClick={handleNavigateTag} className='cursor-pointer ' >
          Tags
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}