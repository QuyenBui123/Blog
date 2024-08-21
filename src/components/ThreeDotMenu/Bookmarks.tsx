import React, { useState } from "react";
import { IoMdBookmarks } from "react-icons/io";

const BookMarks: React.FC = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="item-center">
      <button
        type="button"
        onClick={handleBookmarkClick}
        className={`hover:text-black dark:hover:text-blue-500 ${
          isBookmarked ? "text-black dark:text-blue-500" : "text-gray-500"
        } `}
      >
        <IoMdBookmarks className="text-2xl" />
      </button>
    </div>
  );
};

export default BookMarks;
