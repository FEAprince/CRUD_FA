import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { validUsername } from "../helper";
import { validPaasword } from "../helper";
import { useNavigate } from "react-router";
import Alert from "@mui/material/Alert";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import InputLabel from "@mui/material/InputLabel";
import { Link } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameErr, setUsernameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const validate = () => {
    let formIsValid = true;
    if (!validUsername.test(username)) {
      formIsValid = false;
      setUsernameErr("Your Username is invalid");
    }
    if (!validPaasword.test(password)) {
      formIsValid = false;
      setPasswordErr("Your Password is invalid");
    }
    return formIsValid;
  };
  const handleClickShowPassword = () => {
    setPassword({
      ...password,
      showPassword: !password.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    if (validate() !== true) {
    } else {
      postData(e);
      setOpen(true);
    }
    e.preventDefault();
  };

  // const notify = () =>
  //   toast.success("Data Submit", {
  //     theme: "colored",
  //   });
  const postData = (event) => {
    event.preventDefault();
    axios
      .post("https://6273b645345e1821b2200dff.mockapi.io/login1", {
        username,
        password,
      })
      .then(() => {
        navigate(`/`);
      });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="loginui">
      <h2 className="loginuib">Signup</h2>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        name=""
        method="post"
      >
        <h6 className="loginuia">Username</h6>
        <TextField
          type="text"
          name="username"
          required
          fullWidth
          id="outlined-required"
          label="Username"
          value={username}
          onChange={(e) => [setUsername(e.target.value), setUsernameErr("")]}
        />
        <br />
        {usernameErr && <Alert severity="error">{usernameErr}</Alert>}

        <h6 className="loginuia">Password</h6>
        <FormControl fullWidth variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            label="Password"
            type={password.showPassword ? "text" : "password"}
            value={password.password}
            required
            autoComplete="current-password"
            maxLength={30}
            onChange={(e) => [setPassword(e.target.value), setPasswordErr("")]}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {password.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <br />
        {passwordErr && <Alert severity="error">{passwordErr}</Alert>}
        <div className="loginuia">
          <Button variant="contained" type="submit" onClick={validate}>
            Signup
          </Button>
        </div>
        <p>
          Already Signup ?{" "}
          <Link to="/Login">
            <Button>Login</Button>
          </Link>
        </p>
      </Box>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Signup Successfully!
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}
