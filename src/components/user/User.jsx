import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { suceessMessage } from "../helper";
import {
  userHandlergetData,
  userHandlerDataDelete,
} from "../service/auth.service";
export default function User() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);
  const [UserCount, setUserCount] = useState();
  const body = {
    id: localStorage.getItem("id"),
  };
  console.log(pageCount);
  // var countUser = Object.keys(data).length;
  const onDelete = async (id) => {
    console.log("Your Deleted Id", id); // eslint-disable-next-line
    const response = await userHandlerDataDelete(body, id);
    suceessMessage("User Delete Successfully!");
    getData();
  };

  const getData = async () => {
    const response = await userHandlergetData(body);
    const data = response.data;
    const slice = data.slice(offset, offset + perPage);

    const postData = slice.map((data, index) => (
      <tr key={data.id}>
        <td>{index + 1}</td>
        <td>{data.id}</td>
        <td>
          <img className="profiimg" src={data.avatar} alt="img" />
        </td>

        <td>{data.name}</td>

        <td>{moment(data.createdAt).format("DD-MM-YY h:mm:ss A")},</td>

        <td>
          <button className="btn btn-danger" onClick={() => onDelete(data.id)}>
            Delete
          </button>
        </td>
      </tr>
    ));
    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
    setUserCount(data.length);
  };
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <div className="tableui">
      <div className="boxui">Total User:{UserCount} </div>
      <table className="table table-bordered tableui2">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Profile Id</th>
            <th scope="col">Profile Photo</th>
            <th scope="col">First Name</th>
            <th scope="col">Cration Date</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>{data}</tbody>
      </table>

      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
