import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
  };

  const getData = () => {
    axios
      .get(`https://6273b645345e1821b2200dff.mockapi.io/crud1`)
      .then((getData) => {
        setAPIData(getData.data);
        console.log("DATA");
      })
      .catch((err) => {
        setAPIData([]);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://6273b645345e1821b2200dff.mockapi.io/crud1/${id}/`)
      .then(() => {
        getData();
        notify();
      });
  };
  const notify = () =>
    toast.success("Data Deleted!", {
      theme: "colored",
    });

  var count = Object.keys(APIData).length;
  console.log(count);

  return (
    <div>
      <div>
        <div>
          <div className="text tableui"> Total Data <span></span>{count}</div>
        </div>
      </div>
      <div className="tableui">
        <h1>Data</h1>
        

        <table className="table table-bordered ">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {APIData.length > 0 ? (
              APIData.map((data) => {
                return (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>
                      <Link to="/update">
                        <button
                          className="btn btn-success"
                          onClick={() => setData(data)}
                        >
                          Update
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => onDelete(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <td colSpan="5" className="text">
                Data Not Found!
              </td>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
