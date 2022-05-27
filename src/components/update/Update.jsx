import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { validName } from "../helper";
import { validEmail } from "../helper";
import { validPhoneno } from "../helper";

export default function Update() {
  const navigate = useNavigate();
  const [id, setID] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [fnameErr, setfnameErr] = useState(false);
  const [lnameErr, setlnameErr] = useState(false);
  const [phonenoErr, setphonenoErr] = useState(false);

  const validate = () => {
    let formIsValid = true;
    if (!validEmail.test(email)) {
      formIsValid = false;
      setEmailErr(true);
    }
    if (!validName.test(firstname)) {
      formIsValid = false;
      setfnameErr(true);
    }
    if (!validName.test(lastname)) {
      formIsValid = false;
      setlnameErr(true);
    }
    if (!validPhoneno.test(phoneno)) {
      formIsValid = false;
      setphonenoErr(true);
    }
    return formIsValid;
  };

  const handleSubmit = (e) => {
    if (validate() !== true) {
    } else {
      updateAPIData(e);
    }
    e.preventDefault();
  };
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstname(localStorage.getItem("First Name:"));
    setLastname(localStorage.getItem("Last Name:"));
    setEmail(localStorage.getItem("Email:"));
    setPhoneno(localStorage.getItem("Phone No:"));
  }, []);

  // const notify = () =>
  //   toast.success("Data Updated!", {
  //     theme: "colored",
  //   });

  const updateAPIData = (event) => {
    event.preventDefault();
    axios
      .put(`https://6273b645345e1821b2200dff.mockapi.io/crud1/${id}`, {
        firstname,
        lastname,
        email,
        phoneno,
      })
      .then(() => {
        navigate(`/read`);
      });
  };
  return (
    <div className="tableui">
      <h1>Update Data</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="mb-3">
          <label className="form-label">First Name:</label>
          <input
            className="form-control"
            placeholder="Enter Your Frist Name"
            name="fristname"
            maxLength={15}
            id="fristnameErr"
            value={firstname}
            onChange={(e) => [setFirstname(e.target.value), setfnameErr("")]}
          />
          {fnameErr && <p className="errorstyle">Your First Name is invalid</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name:</label>
          <input
            className="form-control"
            placeholder="Enter Your Last Name"
            name="lastname"
            id="lastnameErr"
            maxLength={15}
            value={lastname}
            onChange={(e) => [setLastname(e.target.value), setlnameErr("")]}
          />
          {lnameErr && <p className="errorstyle">Your Last Name is invalid</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            className="form-control"
            name="email"
            placeholder="exmample@etc.com"
            id="emailErr"
            maxLength={30}
            value={email}
            onChange={(e) => [setEmail(e.target.value), setEmailErr("")]}
          />
          {emailErr && <p className="errorstyle">Your email is invalid</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Phone No:</label>
          <input
            className="form-control"
            placeholder="1234567890"
            id="phonenoErr"
            value={phoneno}
            maxLength={10}
            onChange={(e) => [setPhoneno(e.target.value), setphonenoErr("")]}
          />
          {phonenoErr && <p className="errorstyle">Your Phone No is invalid</p>}
        </div>

        <button onClick={validate} type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
}
