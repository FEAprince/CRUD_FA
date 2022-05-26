import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

export default function App() {
  const [APIData, setAPIData] = useState([]);
  const API = new URL("https://6273b645345e1821b2200dff.mockapi.io/");
  useEffect(() => {
    getData();
  }, []);
  const [APIDataTodo, setAPIDataTodo] = useState([]);
  useEffect(() => {
    getDataTodo();
  }, []);
  const [APIDataUser, setAPIDataUser] = useState([]);
  useEffect(() => {
    getDataUser();
  }, []);
  const [APIDataUser1, setAPIDataUser1] = useState([]);
  useEffect(() => {
    getDataUser1();
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));

  const getData = () => {
    axios
      .get(`${API}crud1`)
      .then((getData) => {
        setAPIData(getData.data);
      })
      .catch((err) => {
        setAPIData([]);
      });
  };

  const getDataTodo = () => {
    axios
      .get(`${API}todo`)
      .then((getDataTodo) => {
        setAPIDataTodo(getDataTodo.data);
      })
      .catch((err) => {
        setAPIDataTodo([]);
      });
  };
  const getDataUser = () => {
    axios
      .get(`${API}login`)
      .then((getDataUser) => {
        setAPIDataUser(getDataUser.data);
      })
      .catch((err) => {
        setAPIDataUser([]);
      });
  };
  const getDataUser1 = () => {
    axios
      .get(`${API}login1`)
      .then((getDataUser1) => {
        setAPIDataUser1(getDataUser1.data);
      })
      .catch((err) => {
        setAPIDataUser1([]);
      });
  };
  var count = Object.keys(APIData).length;
  var counttodo = Object.keys(APIDataTodo).length;
  var countUser = Object.keys(APIDataUser).length;
  var countUser1 = Object.keys(APIDataUser1).length;

  return (
    <div>
      <div className="container tableui">
        <div className="boxui row align-items-start ">
          <p className="text col profileui">
            Total Data <br /> <span></span>
            {count}
          </p>
          <p className="text col profileui ">
            Total Todo <br /> <span></span>
            {counttodo}
          </p>
          <p className="text col  profileui ">
            Total User <br /> <span></span>
            {countUser}
          </p>
          <p className="text col  profileui ">
            Total User <br /> <span></span>
            {countUser1}
          </p>
          <div className="profileui col">
            <div className="text">
              <h4 className="">
                {user.fname}
                {user.lname}
              </h4>
              <div>
                <img
                  id="avatar"
                  className="image-crop"
                  src={user.avatar}
                  alt="Profile"
                ></img>
              </div>
              <div id="bio">
                <p></p>
              </div>
              <p>Email:{user.email}</p>

              <div id="buttons">
                <Button>Messages</Button>
                <Button>E-Mail</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
