
import { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { FiShare, FiLink, FiFlag } from 'react-icons/fi';

const ThreeDotMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const handleShare = () => {
    alert('Share clicked');
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard');
  };
  const handleReport = () => {
    alert('Report clicked');
  };
  return (
    <div className="relative inline-block text-right">
      <button onClick={handleMenuClick} className="flex items-center p-2 text-gray-500 hover:text-gray-700">
        <FaEllipsisV />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="py-1">
            <button
              onClick={handleShare}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <FiShare className="mr-2" /> Share
            </button>
            <button
              onClick={handleCopyLink}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <FiLink className="mr-2" /> Copy Link
            </button>
            <button
              onClick={handleReport}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <FiFlag className="mr-2" /> Report
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default ThreeDotMenu;