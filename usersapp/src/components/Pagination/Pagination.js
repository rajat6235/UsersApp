import React from "react";
import { useLocation, useNavigate  } from "react-router-dom";
import "./Pagination.css";


function Pagination({ setCurrentPage, currentPage }) {
  let pages = [];
  const navigate = useNavigate();
  const location = useLocation();
  // location.state.page && setCurrentPage(location.state.page)
console.log(location.state)
  for (let i = 1; i <= 5; i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setCurrentPage(page);
              navigate(`/${page}`, { state: { page }})
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
