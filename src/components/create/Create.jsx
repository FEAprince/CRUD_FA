import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

import axios from "axios";
export default function Create() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const notify = () =>
    toast.success("Data Submit", {
      theme: "colored",
    });
  console.log(firstName);
  console.log(lastName);

  const postData = (event) => {
    event.preventDefault();

    axios
      .post("https://6273b645345e1821b2200dff.mockapi.io/crud1", {
        firstName,
        lastName,
      })
      .then(() => {
        navigate(`/read`);
      });
  };
  return (
    <div>
      <div className="tableui">
        <h1>Create</h1>
        <form onSubmit={postData}>
          <div className="mb-3">
            <label className="form-label">First Name :</label>
            <input
              className="form-control"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name :</label>
            <input
              className="form-control"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <button onClick={notify} type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      {/* <div className="tableui">
        <h1>Create</h1>
        <form onSubmit={postData}>
          <div className="mb-3">
            <label className="form-label">First Name :</label>
            <input
              className="form-control"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name :</label>
            <input
              className="form-control"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <button onClick={notify} type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div> */}

      <ToastContainer />
    </div>
  );
}
