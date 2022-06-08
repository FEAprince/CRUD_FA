import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default function User() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    const res = await axios.get(
      `https://6273b645345e1821b2200dff.mockapi.io/login`
    );
    const data = res.data;
    const slice = data.slice(offset, offset + perPage);
    const postData = slice.map((pd) => (
      <div key={pd.id}>
        <tr key={pd.id}>
          <td>{index + 1}</td>
          <td>{pd.id}</td>
          <td>
            <img className="profiimg" src={pd.avatar} alt="img" />
          </td>

          <td>{pd.name}</td>

          <td>{moment(pd.createdAt).format("DD-MM-YY h:mm:ss A")},</td>

          <td>
            <button
              className="btn btn-danger"
              onClick={(e) => props.onDelete(pd.id)}
            >
              Delete
            </button>
          </td>
          {/* <td>{post.body}</td> */}
        </tr>
      </div>
    ));
    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <div className="App">
      {data}
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
