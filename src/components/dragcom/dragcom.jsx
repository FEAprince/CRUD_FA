import React, { Component } from "react";

export default class Dragcom extends Component {
  state = {
    tasks: [
      { name: "Prince", category: "todo" },
      { name: "Akabari", category: "todo" },
      { name: "123", category: "todo" },
    ],
  };

  onDragOver = (e) => {
    e.preventDefault();
  };

  onDrop = (e, cat) => {
    let id = e.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks,
    });
  };

  onDragStart = (e, id) => {
    
    e.dataTransfer.setData("id", id);
  };

  render() {
    var tasks = {
      todo: [],
      done: [],
    };

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="todomain container tableui">
        <h2>To-Do</h2>
        
        <div className="row ">
          <div
            className="todo col-sm"
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => {
              this.onDrop(e, "todo");
            }}
          >
            <h4 className="todocard">Todo List</h4>
            {tasks.todo}
          </div>
          <div
            className="droppable col-sm"
            onDrop={(e) => this.onDrop(e, "done")}
            onDragOver={(e) => this.onDragOver(e)}
          >
            <h4 className="todocard">Todo Completed</h4>
            {tasks.done}
          </div>
        </div>
      </div>
    );
  }
}
