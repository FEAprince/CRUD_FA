import React, { useState } from "react";
import { useNavigate } from "react-router";
import { suceessMessage, validName } from "../helper";
import { validEmail } from "../helper";
import { validPhoneno } from "../helper";
import { createHandlerData } from "../service/auth.service";

export default function Create() {
  const navigate = useNavigate();
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
      setEmailErr("Your Email No is invalid");
    }
    if (!validName.test(firstname)) {
      formIsValid = false;
      setfnameErr("Your First Name No is invalid");
    }
    if (!validName.test(lastname)) {
      formIsValid = false;
      setlnameErr("Your Last Name is invalid");
    }
    if (!validPhoneno.test(phoneno)) {
      formIsValid = false;
      setphonenoErr("Your Phone no No is invalid");
    }

    return formIsValid;
  };

  const handleSubmit = (e) => {
    if (validate() !== true) {
    } else {
      postData(e);
      suceessMessage("Data Created Successfully!");
    }
    e.preventDefault();
  };

  const postData = async (event) => {
    event.preventDefault();
    const body = {
      firstname,
      lastname,
      email,
      phoneno,
    };
    const response = await createHandlerData(body);
    // console.log("---<<<", response);
    // eslint-disable-next-line
    if (response.status == "201") {
      navigate(`/Read`);
    }
  };

  return (
    <div>
      <div className="tableui">
        <h1>Create</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          name=""
          method="post"
        >
          <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input
              className="form-control"
              placeholder="Enter Your Frist Name"
              type="text"
              name="fristname"
              maxLength={15}
              id="fristnameErr"
              value={firstname}
              onChange={(e) => [setFirstname(e.target.value), setfnameErr("")]}
            />
            {fnameErr && <p className="errorstyle">{fnameErr}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input
              className="form-control"
              placeholder="Enter Your Last Name"
              type="text"
              name="lastname"
              id="lastnameErr"
              maxLength={15}
              value={lastname}
              onChange={(e) => [setLastname(e.target.value), setlnameErr("")]}
            />
            {lnameErr && <p className="errorstyle">{lnameErr}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              className="form-control"
              name="email"
              type="email"
              placeholder="exmample@etc.com"
              id="emailErr"
              maxLength={30}
              value={email}
              onChange={(e) => [setEmail(e.target.value), setEmailErr("")]}
            />
            {emailErr && <p className="errorstyle">{emailErr}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Phone No:</label>
            <input
              className="form-control"
              placeholder="1234567890"
              name="number"
              type="text"
              id="phonenoErr"
              value={phoneno}
              maxLength={10}
              onChange={(e) => [setPhoneno(e.target.value), setphonenoErr("")]}
            />
            {phonenoErr && <p className="errorstyle">{phonenoErr}</p>}
          </div>

          <button onClick={validate} type="Submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  );
}
