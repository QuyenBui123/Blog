import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link,  } from 'react-router-dom';
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
const mockUser = {
  username: 'Test',
  email: 'testuser@example.com',
  profilePicture: 'https://example.com/profile.jpg',
};
export default function Header() {
  const currentUser = mockUser;
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);

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
              <Avatar alt='user' img='https://cdn-icons-png.flaticon.com/512/149/149071.png' rounded />
            }
          >
            <Dropdown.Header>
              <Link to='/ProfilePage' className=' hover:text-blue-500'><span className='block text-sm' >{mockUser.username}</span>
              
              <span className='block text-sm font-medium truncate'>
                {mockUser.email}
              </span>
              </Link>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>  
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item >Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse  > {/*  className='md:block ' */}
        <Navbar.Link href="/" >
          Home
        </Navbar.Link>
        <Navbar.Link  href="/pos">
          Creat Post
        </Navbar.Link>
        <Navbar.Link href="/" >
          Projects
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}