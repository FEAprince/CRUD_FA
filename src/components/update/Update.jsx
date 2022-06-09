import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { suceessMessage} from "../helper";
import {
  updateHandlerData,
  updateHandlerupdateData,
} from "../service/auth.service";

export default function Update() {
  const { id } = useParams();
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phoneno, setphoneno] = useState("");

  const body = {
    id: localStorage.getItem("id"),
  };
  const getDashboardData = async () => {
    const response = await updateHandlerData(body, id);
    console.log(response.data);
    setfirstname(response.data.firstname);
    setlastname(response.data.lastname);
    setemail(response.data.email);
    setphoneno(response.data.phoneno);
  };
  const navigate = useNavigate();

  useEffect(() => {
    getDashboardData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("id", id);
    const body = {
      id: id,
      firstname: firstname,
      lastname: lastname,
      email: email,
      phoneno: phoneno,
    };
    console.log("body", body);
    const response = await updateHandlerupdateData(id, body);
    suceessMessage("Data Update Successfully!");
    console.log(response.id);
    navigate(`/Read`);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   var data = {
  //     id: id,
  //     firstname: firstname,
  //     lastname: lastname,
  //     email: email,
  //     phoneno: phoneno,
  //   };
  //   fetch("https://6273b645345e1821b2200dff.mockapi.io/crud1/" + id, {
  //     method: "PUT",
  //     headers: {
  //       Accept: "application/form-data",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (result["status"] === "ok") {
  //         window.location.href = "/";
  //       }
  //       navigate(`/Read`);
  //     });
  // };

  return (
    <Container className="tableui">
      <div>
        <Typography>Data</Typography>
        <form onSubmit={handleSubmit}>
          <Grid className="updateui">
            <Grid className="updateui">
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid className="updateui">
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
            </Grid>
            <Grid className="updateui">
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Email"
                label="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </Grid>
            <Grid className="updateui">
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                value={phoneno}
                onChange={(e) => setphoneno(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}
