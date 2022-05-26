import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
// import Checkbox from "@mui/material/Checkbox";

export default function Read() {
  document.title = "Data";
  const [APIData, setAPIData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const setData = (data) => {
    let { id, firstname, lastname, email, phoneno } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name:", firstname);
    localStorage.setItem("Last Name:", lastname);
    localStorage.setItem("Email:", email);
    localStorage.setItem("Phone no:", phoneno);
  };

  const getData = () => {
    axios
      .get(`https://6273b645345e1821b2200dff.mockapi.io/crud1`)
      .then((getData) => {
        setAPIData(getData.data);
        
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
      });
  };

  var count = Object.keys(APIData).length;
 

  return (
    <div>
      <div>
        <div>
          <div className="text tableui">
            Total Data <span></span>
            {count}
            <div>
              <br />
              <Link className="myb" to="/Create">
                Create New Data
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="tableui">
        <h1>Data</h1>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => onDelete()}
        >
          All Delete
        </Button>
        <span></span>

        <table className="table table-bordered ">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">E-mail</th>
              <th scope="col">Phone No</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
              {/* <th>
                <Checkbox
                  type="checkbox"
                  className="form-check-input"
                  // checked={this.state.MasterChecked}
                  id="mastercheck"
                  // onChange={(e) => onMasterCheck(e)}
                />
              </th> */}
            </tr>
          </thead>
          <tbody>
            {APIData.length > 0 ? (
              APIData.map((data, index) => {
                return (
                  <tr key={data.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    <td>{data.email}</td>
                    <td>{data.phoneno}</td>
                    <td>
                      <Link to="/update">
                        <Button
                          variant="contained"
                          onClick={() => setData(data)}
                        >
                          Update
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={handleClickOpen}
                      >
                        Delete
                      </Button>
                    </td>
                    {/* <td>
                      <Checkbox
                        type="checkbox"
                        // checked={user.selected}
                        className="form-check-input"
                        id="rowcheck{user.id}"
                        // onChange={(e) => this.onItemCheck(e, user)}
                      />
                    </td> */}
                  </tr>
                );
              })
            ) : (
              <td colSpan="10" className="text">
                <CircularProgress />
              </td>
            )}
          </tbody>
        </table>

        {APIData.length > 0 ? (
          APIData.map((data) => {
            return (
              <Dialog
                key={data.id}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Delete Data"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are You Sure For Delete Data?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>No</Button>

                  <Button onClick={() => [onDelete(data.id), handleClose()]}>
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>
            );
          })
        ) : (
          <td></td>
        )}
      </div>
    </div>
  );
}
