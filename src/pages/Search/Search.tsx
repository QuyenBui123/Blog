import { Button, Select, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import ThreeDotMenu from '../../components/ThreeDotMenu'
export default function Search() {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='p-7 border-b md:border-r md:min-h-screen border-gray-500'>
        <form className='flex flex-col gap-8' >
          <div className='flex   items-center gap-2'>
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
          </div>
          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Category:</label>
            <Select
            //   onChange={handleChange}
            //   value={sidebarData.category}
              id='category'
            >
              <option value='uncategorized'>Uncategorized</option>
              <option value='reactjs'>React.js</option>
              <option value='nextjs'>Next.js</option>
              <option value='javascript'>JavaScript</option>
            </Select>
          </div>
          <Button type='submit' outline gradientDuoTone='purpleToPink'>
            Apply Filters
          </Button>
        </form>
      </div>
      <div className='w-full'>
        <h1 className='text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 '>
          Posts results:
        </h1>
        <div className='p-7 flex flex-wrap gap-4'>
            
            <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
              <Link to={`/`}>
                <img
                  src={'https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png'}
                  alt='post cover'
                  className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
                />
              </Link>
              <div className='p-3 flex flex-col gap-2'>
              <div className='flex justify-between'><p className='text-lg font-semibold line-clamp-2'>Test port </p><ThreeDotMenu/></div>                <span className='italic text-sm'>Technology</span>
                <Link
                  to={`/`}
                  className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
                >
                  Read article
                </Link>
              </div>
            </div>
            <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
              <Link to={`/`}>
                <img
                  src={'https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png'}
                  alt='post cover'
                  className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
                />
              </Link>
              <div className='p-3 flex flex-col gap-2'>
              <div className='flex justify-between'><p className='text-lg font-semibold line-clamp-2'>Test port </p><ThreeDotMenu/></div>                <span className='italic text-sm'>Technology</span>
                <Link
                  to={`/`}
                  className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
                >
                  Read article
                </Link>
              </div>
            </div>
            <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
              <Link to={`/`}>
                <img
                  src={'https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png'}
                  alt='post cover'
                  className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
                />
              </Link>
              <div className='p-3 flex flex-col gap-2'>
              <div className='flex justify-between'><p className='text-lg font-semibold line-clamp-2'>Test port </p><ThreeDotMenu/></div>                <span className='italic text-sm'>Technology</span>
                <Link
                  to={`/`}
                  className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
                >
                  Read article
                </Link>
              </div>
            </div>
            <div className='group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all'>
              <Link to={`/`}>
                <img
                  src={'https://png.pngtree.com/png-vector/20220810/ourmid/pngtree-blogging-concept-picture-writer-laptop-png-image_5722986.png'}
                  alt='post cover'
                  className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
                />
              </Link>
              <div className='p-3 flex flex-col gap-2'>
              <div className='flex justify-between'><p className='text-lg font-semibold line-clamp-2'>Test port </p><ThreeDotMenu/></div>                <span className='italic text-sm'>Technology</span>
                <Link
                  to={`/`}
                  className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2'
                >
                  Read article
                </Link>
              </div>
            </div>
                    </div>
      </div>
    </div>
  )
}
