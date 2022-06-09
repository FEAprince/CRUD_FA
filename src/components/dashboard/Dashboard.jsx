import React from "react";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { dashboardHandlerData } from "../service/auth.service";
import { dashboardHandlerTodo } from "../service/auth.service";
import { dashboardHandlerUser } from "../service/auth.service";
import { dashboardHandlerUser1 } from "../service/auth.service";

export default function Dashboard() {
  document.title = "Dashboard";
  const [Data, setData] = useState([]);
  const [Todo, setTodo] = useState([]);
  const [User, setUser] = useState([]);
  const [User1, setUser1] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [timer, setTimer] = useState(
    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  );
  const [date, setDate] = useState(
    `${new Date().getDate()}:${new Date().getMonth() +
      1}:${new Date().getFullYear()}`
  );
  const body = {
    id: localStorage.getItem("id"),
  };

  setInterval(() => {
    setTimer(
      `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    );
    setDate(
      `${new Date().getDate()}:${new Date().getMonth() +
        1}:${new Date().getFullYear()}`
    );
  }, 1000);

  useEffect(() => {
    getDashboardData();
    getDashboardTodo();
    getDashboardUser();
    getDashboardUser1();
  }, []);

  const getDashboardData = async () => {
    const response = await dashboardHandlerData(body);
    setData(response.data);
  };

  const getDashboardTodo = async () => {
    const response = await dashboardHandlerTodo(body);
    setTodo(response.data);
  };
  const getDashboardUser = async () => {
    const response = await dashboardHandlerUser(body);
    setUser(response.data);
  };
  const getDashboardUser1 = async () => {
    const response = await dashboardHandlerUser1(body);
    setUser1(response.data);
  };

  return (
    <div>
      <div className="container tableui">
        <div className="boxui row align-items-start ">
          <p className="text col profileui">
            Total Data <br /> <span></span>
            {Data.length}
          </p>
          <p className="text col profileui ">
            Total Todo <br /> <span></span>
            {Todo.length}
          </p>
          <p className="text col  profileui ">
            Total User <br /> <span></span>
            {User.length}
          </p>
          <p className="text col  profileui ">
            Total User <br /> <span></span>
            {User1.length}
          </p>
          <div className="profileui col">
            <div className="text">
              <p>Date: {date}</p>
              <p>Time: {timer}</p>
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
