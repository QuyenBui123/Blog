
import { ListGroup } from 'flowbite-react';
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
        
      <div className="absolute right-0 mt-2 w-48   rounded-md shadow-lg">
        <ListGroup className="w-48">
        <ListGroup.Item onClick={handleShare}><FiShare className="mr-2" /> Share</ListGroup.Item>
        <ListGroup.Item onClick={handleCopyLink}><FiLink className="mr-2" /> Copy Link</ListGroup.Item>
        <ListGroup.Item onClick={handleReport}><FiFlag className="mr-2" /> Report</ListGroup.Item>
      </ListGroup>  
        </div>
      )}
    </div>
  );
}


export default ThreeDotMenu;