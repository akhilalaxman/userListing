
import React from "react";

function Pagination({ postPerPage, totalPosts, paginate }) {
 
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        <li><a>&laquo;</a></li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li><a >&raquo;</a></li>
      </ul>
    </nav>
  );
}

export default Pagination;
