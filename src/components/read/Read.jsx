import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCheckbox,
} from "mdb-react-ui-kit";
export default function Read() {
  const [APIData, setAPIData] = useState([]);
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);
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
  // const checkboxs(){

  // }

  function checkAll() {
    var inputs = document.querySelectorAll(".check");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].checked = true;
    }
  }

  var count = Object.keys(APIData).length;
  console.log(count);

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
              <th>
                <input type="button" onClick={checkAll()} value="CHECK ALL" />
                <input type="reset" value="UNCHECK ALL" />
              </th>
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
                        <button
                          className="btn btn-success"
                          onClick={() => setData(data)}
                        >
                          Update
                        </button>
                      </Link>
                    </td>
                    <td>
                      <MDBBtn onClick={toggleShow}>Delete</MDBBtn>
                    </td>
                    <td>
                      <MDBCheckbox
                        name="checkNoLabel"
                        id="checkNoLabel"
                        value=""
                        aria-label="..."
                        className="check"
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <td colSpan="7" className="text">
                Data Not Found!
              </td>
            )}
          </tbody>
        </table>
        {APIData.length > 0 ? (
          APIData.map((data, index) => {
            return (
              <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Data Delete</MDBModalTitle>
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={toggleShow}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>Are You Sure to Data Delete?</MDBModalBody>

                    <MDBModalFooter>
                      <MDBBtn color="secondary" onClick={toggleShow}>
                        Close
                      </MDBBtn>
                      <MDBBtn
                        onClick={(e) => [onDelete(data.id), toggleShow()]}
                      >
                        Yes, Delete
                      </MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            );
          })
        ) : (
          <td></td>
        )}
      </div>
    </div>
  );
}
