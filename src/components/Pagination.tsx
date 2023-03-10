import React, { useCallback } from "react";

interface IPaginationProps {
  setActivePage: (page: number) => void;
  activePage: number;
}

const Pagination = ({ activePage, setActivePage }: IPaginationProps) => {
  const nextPage = useCallback(() => {
    if (activePage <= 9) {
      setActivePage(activePage + 1);
    }
  }, [activePage]);
  const prevPage = useCallback(() => {
    if (activePage >= 2) {
      setActivePage(activePage - 1);
    }
  }, [activePage]);
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <div className="flex items-center justify-center font-sans">
        <div className="lg:w-5/6 w-full  flex items-center justify-between">
          <div className="flex items-center">
            <button
              className=" text-lg text-gray-600 px-2 py-4  font-medium font-sans"
              onClick={prevPage}
            >
              Prev Page
            </button>
          </div>
          <div className="sm:flex hidden">
            {pages.map((pageNum) => (
              <button
                key={pageNum}
                className=" px-2 py-4 focus:text-lime-500 text-gray-600  italic font-medium font-sans"
                onClick={() => setActivePage((activePage = pageNum))}
              >
                {pageNum}
              </button>
            ))}
          </div>
          <div className="flex items-center">
            <button
              className="text-lg text-gray-600 ps-2 py-4 font-medium"
              onClick={nextPage}
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
