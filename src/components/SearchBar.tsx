import React from "react";

interface ISearchBarProps {
  setInputText: (text: string) => void;
}

const SearchBar = ({ setInputText }: ISearchBarProps) => {
  const inputHandler = (e: { target: { value: string } }) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div>
      {" "}
      <form className="w-3/5 py-3" action="">
        <label className="relative block">
          <input
            className="bg-search-color text-input-color h-10 w-full py-7 pl-5 pr-10"
            type="text"
            onChange={inputHandler}
            placeholder="Search"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 pointer-events-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
