import React, { useEffect, useRef } from "react";
import "./Pagination.css";

function Pagination({ setCurrentPage, currentPage }) {
  let pages = [];
//   const previousInputValue = useRef(null);
//   useEffect(() => {
//     previousInputValue.current = currentPage;
//     // console.log(previousInputValue.current)
//   }, [currentPage]);
  for (let i = 1; i <= 5; i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => {setCurrentPage(page);
            // console.log(page,currentPage,previousInputValue)
            }}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
