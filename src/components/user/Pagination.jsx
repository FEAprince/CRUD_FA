import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Pagination extends Component {
  render() {
    const {
      postsPerPage,
      totalPosts,
      paginate,
      nextPage,
      prevPage,
    } = this.props;

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <Link to="/User">
              <a className="page-link" href="/User" onClick={() => prevPage()}>
                Previous
              </a>
            </Link>
          </li>
          {pageNumbers.map((num) => (
            <li className="page-item" key={num}>
              <Link
                to="/User"
                onClick={() => paginate(num)}
                className="page-link"
              >
                {num}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link to="/User">
              <a className="page-link" href="/User" onClick={() => nextPage()}>
                Next
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
