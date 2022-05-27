import React from "react";
import { useEffect, useState } from "react";
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
import {
  dashboardHandlerData,
  dataHandlerDataDelete,
} from "../service/auth.service";

export default function Read() {
  document.title = "Data";
  const [Data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeleteId] = useState(-1);
  const body = {
    id: localStorage.getItem("id"),
  };
  const handleClickOpen = (id) => {
    setDeleteId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDeleteId(-1);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  const getDashboardData = async () => {
    const response = await dashboardHandlerData(body);
    setData(response.data);
  };
  const DataDelete = async () => {
    const response = await dataHandlerDataDelete(body, deleteId);
    setData(response.data);
    setDeleteId(-1);
    getDashboardData();
  };

  return (
    <div>
      <div>
        <div>
          <div className="text tableui">
            Total Data{Data.length}
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
            </tr>
          </thead>
          <tbody>
            {Data.length > 0 ? (
              Data.map((data, index) => {
                return (
                  <tr key={data.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                    <td>{data.email}</td>
                    <td>{data.phoneno}</td>
                    <td>
                      <Link to="/update">
                        <Button variant="contained" onClick={() => setData()}>
                          Update
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={() => handleClickOpen(data.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <CircularProgress colSpan="10" className="text" />
            )}
          </tbody>
        </table>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Delete Data"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are You Sure For Delete Data?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>

            <Button onClick={() => [DataDelete(), handleClose()]}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
