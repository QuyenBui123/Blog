import { Button, Select, TextInput } from 'flowbite-react'
import PostCard from '../../components/PostCard'
export default function Tag() {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='p-7 border-b md:border-r md:min-h-screen border-gray-500'>
        <form className='flex flex-col gap-8' >
          {/* <div className='flex   items-center gap-2'>
            <label className='whitespace-nowrap font-semibold'>
              Search Term:
            </label>
            <TextInput
              placeholder='Search...'
              id='searchTerm'
              type='text'
            //   value={sidebarData.searchTerm}
            //   onChange={handleChange}
            />
          </div>
          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Sort:</label>
            <Select  id='sort'>
              <option value='desc'>Latest</option>
              <option value='asc'>Oldest</option>
            </Select>
          </div> */}
          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Tags:</label>
            <Select
            //   onChange={handleChange}
            //   value={sidebarData.category}
              id='category'
              className='w-36'
            >
              <option value='uncategorized'>Uncategorized</option>
              <option value='reactjs'>React.js</option>
              <option value='nextjs'>Next.js</option>
              <option value='javascript'>JavaScript</option>
            </Select>
          </div>
          <Button type='submit' outline gradientDuoTone='purpleToPink'>
            Apply 
          </Button>
        </form>
      </div>
      <div className='w-full'>
        <h1 className='text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 '>
          All Tags:
        </h1>
        <div className='p-7 flex flex-wrap gap-4'>
            <PostCard/>    
        </div>
      </div>
    </div>
  )
}
