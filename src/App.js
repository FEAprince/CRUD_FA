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
  const [APIDataUser1, setAPIDataUser1] = useState([]);
  useEffect(() => {
    getDataUser1();
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
  const getDataUser1 = () => {
    axios
      .get(`https://6273b645345e1821b2200dff.mockapi.io/login1`)
      .then((getDataUser1) => {
        setAPIDataUser1(getDataUser1.data);
        console.log("DATA USER");
      })
      .catch((err) => {
        setAPIDataUser1([]);
      });
  };
  var count = Object.keys(APIData).length;
  console.log(count);

  var counttodo = Object.keys(APIDataTodo).length;
  console.log(counttodo);
  var countUser = Object.keys(APIDataUser).length;
  console.log(countUser);
  var countUser1 = Object.keys(APIDataUser1).length;
  console.log(countUser1);
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
        <div className="text boxui col-sm">
          Total User <br /> <span></span>
          {countUser1}
        </div>
      </div>
    </div>
  );
}
