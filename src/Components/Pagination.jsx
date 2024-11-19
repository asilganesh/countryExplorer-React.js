import React from "react";

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="flex gap-1 justify-center p-4 w-full flex-wrap">
        {pageNumbers.map((number) => (
          <>
            <button
              key={number}
              onClick={() => paginate(number)}
              className={` text-black text-md p-2 px-3 rounded-md ${currentPage===number?"bg-blue-400":"bg-gray-200"}`}
            >
              {number}
            </button>
          </>
        ))}
      </div>
    </>
  );
};

export default Pagination;
