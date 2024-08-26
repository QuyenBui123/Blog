import { ListGroup } from "flowbite-react";
import { useState } from "react";
import { FaEllipsisV, FaFacebook } from "react-icons/fa";
import { FiShare, FiLink, FiFlag } from "react-icons/fi";
import BookMarks from "./Bookmarks";

const ThreeDotMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const handleShareFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(facebookUrl, "_blank");
  };

  const handleShareZalo = () => {
    const zaloUrl = `https://zalo.me/share?url=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(zaloUrl, "_blank");
  };
  // const handleShare =async () => {
  //   // alert('Share clicked');
  //   if (navigator.share) {
  //     try {
  //       await navigator.share({
  //         title: document.title,
  //         text: 'Check out this content!',
  //         url: window.location.href,
  //       });
  //     } catch (error) {
  //       console.error('Error sharing:', error);
  //     }
  //   } else {
  //     alert('Share not supported on this browser.');
  //   }
  // };
  const handleCopyLink = () => {
    // navigator.clipboard.writeText(window.location.href);
    // alert('Link copied to clipboard');
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert("Link copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy link:", err);
      });
  };
  const handleReport = () => {
    alert("Report clicked");
  };
  return (
    <div className="flex items-center">
      <button>
        <BookMarks />{" "}
      </button>
      <div className="relative inline-block text-right">
        <button
          onClick={handleMenuClick}
          className="flex items-center  text-gray-500 hover:text-gray-700"
        >
          <FaEllipsisV />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48   rounded-md shadow-lg ">
            <ListGroup className="w-48">
              <ListGroup.Item onClick={handleShareFacebook}>
                <FaFacebook className="mr-2" /> Share Facebook
              </ListGroup.Item>
              <ListGroup.Item onClick={handleShareZalo}>
                <FiShare className="mr-2" /> Share Zalo
              </ListGroup.Item>
              <ListGroup.Item onClick={handleCopyLink}>
                <FiLink className="mr-2" /> Copy Link
              </ListGroup.Item>
              <ListGroup.Item onClick={handleReport}>
                <FiFlag className="mr-2" /> Report
              </ListGroup.Item>
            </ListGroup>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreeDotMenu;
