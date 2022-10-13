import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pagination.css";

function Pagination({ currentPage }) {
  let pages = [];
  const navigate = useNavigate();

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
              navigate(`/${page}`, { state: { page } });
            }}
            className={page === Number(currentPage) ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
