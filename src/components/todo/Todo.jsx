import axios from "axios";
import React from "react";
import { BsFillArchiveFill } from "react-icons/bs";
import Draggable from 'react-draggable';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Todo() {
  const [todo, setTodo] = useState("");
  
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const postData = (event) => {
    event.preventDefault();
    axios.post("https://6273b645345e1821b2200dff.mockapi.io/todo", {
      todo,
    })
    .then(() => {
      getData();
    });
  };
  const onDelete = (id) => {
    axios
      .delete(`https://6273b645345e1821b2200dff.mockapi.io/todo/${id}/`)
      .then(() => {
        getData();
      }).then(() => {
        getData();
      });
      
  };

  const getData = () => {
    axios
      .get(`https://6273b645345e1821b2200dff.mockapi.io/todo`)
      .then((getData) => {
        setAPIData(getData.data);
        console.log("DATA");
      })
      .catch((err) => {
        setAPIData([]);
      })
      ;
  };
  var count = Object.keys(APIData).length;
  console.log(count);


  


  // const setData = (data) => {
  //   let { id, todo } = data;
  //   localStorage.setItem("id", id);
  //   localStorage.setItem("Todo", todo);

  // };

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
         <Link type="submit" className="btn mybutton" to="/todo">
          Add Todo
        </Link>
      </form>
      <h3 className="tablecard tableui">
        Total Todo {count}
      </h3>
      <div className="row">
        <div className="col todo ">
          <div>
            <h4 className="todocard">Todo List</h4>

            {APIData.length > 0 ? (
              APIData.map((data) => {
                return (
                  <Draggable>
                  <div className="draggable" key={data.id}>
                    {/* <td>{data.id}</td> */}
                    {data.todo}
                    <br />
                     <BsFillArchiveFill onClick={() => onDelete(data.id)} />
                  </div></Draggable>
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
