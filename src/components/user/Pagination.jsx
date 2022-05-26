import React, { Component } from "react";

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
            <a className="page-link" href="/User" onClick={() => prevPage()}>
              Previous
            </a>
          </li>
          {pageNumbers.map((num) => (
            <li className="page-item" key={num}>
              <a onClick={() => paginate(num)}  href="/User"className="page-link">
                {num}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" href="/User" onClick={() => nextPage()}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
