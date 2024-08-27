// SearchBar.tsx
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative ">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Tìm kiếm..."
        className="p-2 border rounded"
      />
      <button type="submit" className="absolute right-0 top-0 mt-2 mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a7 7 0 107 7 7 7 0 00-7-7zM21 21l-4.35-4.35"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
