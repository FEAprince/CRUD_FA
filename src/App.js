import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [APIData, setAPIData] = useState([]);
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

  const getDataTodo = () => {
    axios
      .get(`https://6273b645345e1821b2200dff.mockapi.io/todo`)
      .then((getDataTodo) => {
        setAPIDataTodo(getDataTodo.data);
      })
      .catch((err) => {
        setAPIDataTodo([]);
      });
  };
  const getDataUser = () => {
    axios
      .get(`https://6273b645345e1821b2200dff.mockapi.io/login`)
      .then((getDataUser) => {
        setAPIDataUser(getDataUser.data);
        console.log("DATA USER");
      })
      .catch((err) => {
        setAPIDataUser([]);
      });
  };
  var count = Object.keys(APIData).length;
  console.log(count);

  var counttodo = Object.keys(APIDataTodo).length;
  console.log(counttodo);
  var countUser = Object.keys(APIDataUser).length;
  console.log(countUser);

  return (
    <div className="container tableui">
      <div className=" row justify-content-md-center">
        <div className="text boxui col-sm">
          Total Data <br /> <span></span>
          {count}
        </div>
        <div className="text boxui col-sm">
          Total Todo <br /> <span></span>
          {counttodo}
        </div>
        <div className="text boxui col-sm">
          Total User <br /> <span></span>
          {countUser}
        </div>
      </div>
    </div>
  );
}
