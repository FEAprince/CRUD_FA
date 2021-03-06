import React, { useRef } from "react";
import { validTodo } from "../helper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingButton from "@mui/lab/LoadingButton";
import AddIcon from "@mui/icons-material/Add";
// import { useParams } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import {
  todoHandlerpostData,
  todoHandlerDataDelete,
  todoHandlergetData,
  todoHandlerDataUpdate,
} from "../service/auth.service";
import { useEffect, useState } from "react";
import { suceessMessage } from "../helper";

export default function Todo() {
  const [todoErr, settodoErr] = useState(false);
  const [todo, setTodo] = useState("");
  const [APIData, setAPIData] = useState([]);
  // const [disableButton, setDisableButton] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [todoList, setodoList] = React.useState([]);
  // const [dataList, setDataList] = useRef(new Map());
  const dragItem = useRef();
  const dragOverItem = useRef();
  useEffect(() => {
    getData();
  }, []);

  const body = {
    id: localStorage.getItem("id"),
  };

  const dragStart = (e, position) => {
    dragItem.current = position;
  };
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };
  const drop = (e) => {
    const copyListItems = [...APIData];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setAPIData(copyListItems);
    console.log(copyListItems);
  };

  const validate = () => {
    let formIsValid = true;
    if (!validTodo.test(todo)) {
      formIsValid = false;
      settodoErr("Enter Valid Todo!");
    }
    return formIsValid;
  };

  const handleSubmit = () => {
    // eslint-disable-next-line
    APIData.map((data) => {
      console.log("data", data);
      const response = todoHandlerDataUpdate(data.id, data.title);
      console.log(response.data);
    });
  };
  // const copyListItems = [...APIData];

  // const handleSubmit = (e) => {
  //   updateDataSet();
  // };

  const postData = async (event) => {
    event.preventDefault();
    event.target.reset();
    // setDisableButton(true);
    setLoading(true);
    if (validate() !== true) {
    } else {
      const body = {
        todo,
      };
      const response = await todoHandlerpostData(body);
      console.log(response);

      getData();
      suceessMessage("Todo Add Successfully!");
    }
    // setDisableButton(false);
    setLoading(false);
  };

  const onDelete = async (id) => {
    const response = await todoHandlerDataDelete(body, id);
    setAPIData(response.data);
    if (response) {
      suceessMessage("Todo Delete Successfully!");
    }
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
          onChange={(e) => [setTodo(e.target.value), settodoErr("")]}
        ></input>
        {todoErr && <p className="errorstyle">{todoErr}</p>}
        {/* <button
          type="submit"
          className={disableButton ? "btn mybutton disabled" : "btn mybutton"}
        >
          Add Todo
        </button> */}
        <br></br>
        <LoadingButton
          size="small"
          type="submit"
          loading={loading}
          endIcon={<AddIcon />}
          loadingPosition="end"
          variant="contained"
        >
          <span></span>
          Add Todo
        </LoadingButton>
      </form>
      <h3 className="tablecard tableui">Total Todo {count}</h3>
      <LoadingButton
        size="small"
        type="submit"
        // loading={loading}
        endIcon={<SaveIcon />}
        loadingPosition="end"
        variant="contained"
        onClick={handleSubmit}
      >
        Save
      </LoadingButton>
      <div className="row">
        <div className="col todo ">
          <div>
            <h4 className="todocard">Todo List</h4>

            {/* APIData.slice(0)
                .reverse() */}
            {APIData.length > 0 ? (
              APIData.map((data, index) => {
                return (
                  <div
                    onDragStart={(e) => dragStart(e, index)}
                    onDragEnter={(e) => dragEnter(e, index)}
                    onDragEnd={drop}
                    key={index}
                    draggable
                  >
                    <Box
                      className="todoui"
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(, 1fr)",
                      }}
                    >
                      <div>{data.todo}</div>
                      <div>
                        <Button
                          label="Delete Todo"
                          onClick={() => onDelete(data.id)}
                          startIcon={<DeleteIcon />}
                        >
                          Delete
                        </Button>
                      </div>
                    </Box>
                  </div>
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
