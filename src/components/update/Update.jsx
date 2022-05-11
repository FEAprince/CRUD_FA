import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"




export default function Update() {
  const navigate =useNavigate();
  const [id, setID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
  }, []);

  const notify = () =>
    toast.success("Data Updated!", {
      theme: "colored",
    });

  const updateAPIData = (event) => {
    event.preventDefault();
    axios
      .put(`https://6273b645345e1821b2200dff.mockapi.io/crud1/${id}`, {
        firstName,
        lastName,
      })
      .then(() =>{
        navigate(`/read`)
      })
      ;
  };
  return (
    <div className="tableui">
      <h1>Update Data</h1>
      <form onSubmit={updateAPIData}>
        <div className="mb-3">
          <label className="form-label">First Name :</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name :</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <button onClick={notify} type="submit" className="btn btn-primary">
          Update
        </button>
        
        
      </form>
      <ToastContainer />
    </div>
  );
}
