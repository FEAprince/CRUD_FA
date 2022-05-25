import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import swal from "sweetalert";
import { Link } from "react-router-dom";

async function loginUser(credentials) {
  return fetch("https://www.mecallapi.com/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Signin() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password,
    });
    if ("accessToken" in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        localStorage.setItem("accessToken", response["accessToken"]);
        localStorage.setItem("user", JSON.stringify(response["user"]));
        window.location.href = "/";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  };

  return (
    <Grid className="loginui">
      <CssBaseline />
      <Grid />
      <Grid>
        <div className="loginuib">
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign Up
            </Button>
            <p>
              New Member?{" "}
              <Link to="/Signup">
                <Button>Sign Up</Button>
              </Link>
            </p>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
