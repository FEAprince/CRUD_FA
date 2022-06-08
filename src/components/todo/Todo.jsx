import React from "react";
import { useNavigate } from "react-router";
import { BsFillArchiveFill } from "react-icons/bs";
import Draggable from "react-draggable";
import {
  todoHandlerpostData,
  todoHandlerDataDelete,
  todoHandlergetData,
} from "../service/auth.service";
import { useEffect, useState } from "react";
import { suceessMessage } from "../helper";

export default function Todo() {
  const navigate = useNavigate();
  const [todo, setTodo] = useState("");
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const body = {
    id: localStorage.getItem("id"),
  };

  const postData = async (event) => {
    event.preventDefault();
    const body = {
      todo,
    };
    const response = await todoHandlerpostData(body);
    console.log(response);
    getData();
    suceessMessage("Todo Add Successfully!");
    navigate(`/todo`);
  };

  const onDelete = async (id) => {
    const response = await todoHandlerDataDelete(body, id);
    setAPIData(response.data);
    suceessMessage("Todo Delete Successfully!");
    getData();
  };

  const getData = async () => {
    const response = await todoHandlergetData(body);
    setAPIData(response.data);
  };
  var count = Object.keys(APIData).length;

  return (
    <div className="todomain container tableui">
      <h2>To-Do</h2>
      <form onSubmit={postData}>
        <input
          className="form-control form-control-lg myinput"
          type="text"
          placeholder="Add Todo"
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button type="submit" className="btn mybutton" to="/todo">
          Add Todo
        </button>
      </form>
      <h3 className="tablecard tableui">Total Todo {count}</h3>
      <div className="row">
        <div className="col todo ">
          <div>
            <h4 className="todocard">Todo List</h4>

            {APIData.length > 0 ? (
              APIData.map((data) => {
                return (
                  <Draggable key={data.id}>
                    <div className="draggable" key={data.id}>
                      {/* <td>{data.id}</td> */}
                      {data.todo}
                      <br />
                      <BsFillArchiveFill onClick={() => onDelete(data.id)} />
                    </div>
                  </Draggable>
                );
              })
            ) : (
              <div className="text">Todo Not Found!</div>
            )}
          </div>
        </div>
        <div className="col todo">
          <h4 className="todocard">Todo Completed</h4>
        </div>
      </div>
    </div>
  );
}
