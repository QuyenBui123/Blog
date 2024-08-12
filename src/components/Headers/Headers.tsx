// import { Button, Navbar, TextInput } from 'flowbite-react'
// import { Link, useNavigate } from 'react-router-dom'
// import { AiOutlineSearch,} from "react-icons/ai";
// import { useState } from 'react';

// export default function Headers() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (searchTerm) {
//       navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
//     }
//   };
//   return (
//     <Navbar className='border-b-2'>
//       <Link
//         to='/'
//         className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
//       >
//         <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
//           Meta
//         </span>
//         Blog
//       </Link>
//       <form onSubmit={handleSearchSubmit} className='flex items-center p-3'>
//         <TextInput
//           type='text'
//           placeholder='Search...'
//           rightIcon={AiOutlineSearch}
//           className='hidden lg:inline'
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </form>
//       <Button className='w-12 h-10 lg:hidden' color='gray' pill>
//         <AiOutlineSearch />
//       </Button>
//       <div className='flex gap-2 md:order-2'>
//           <Link to='/SignIn'>
//             <Button gradientDuoTone='purpleToBlue' pill>
//               Sign In
//             </Button>
//           </Link>
//         <Navbar.Toggle />
//       </div>
//       <Navbar.Collapse >
//         <Navbar.Link>
//           <Link to='/'>Home</Link>
//         </Navbar.Link>
//         <Navbar.Link >
//           <Link to='/about'>About</Link>
//         </Navbar.Link>
//       </Navbar.Collapse>
      
//     </Navbar>
//   )
// }
import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation,  } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
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

export interface RootState {
  user: UserState;
  theme: ThemeState;
}

const mockUser = {
  username: 'Userr',
  email: 'testuser@example.com',
  profilePicture: 'https://example.com/profile.jpg',
};
export default function Header() {
  const currentUser = mockUser;
  const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2'>
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
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img='https://cdn-icons-png.flaticon.com/512/149/149071.png' rounded />
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>{mockUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {mockUser.email}
              </span>
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
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}