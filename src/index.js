import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Read from "./components/read/Read";
import Create from "./components/create/Create";
// import File from "./components/file/File";
import { Link } from "react-router-dom";
import "./App.css";
import Update from "./components/update/Update";
import Dragcom from "./components/dragcom/dragcom";
import Todo from "./components/todo/Todo";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
// import User from "./components/user/User";
import React  from 'react';

const root = ReactDOM.createRoot(document.getElementById("root"));
const logout = () => {
  this.setState({ 
    sessionToken: '', 
  });
  localStorage.clear();
  
}

root.render(
  
  <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-black bg-black">
      <div className="container-fluid">
        <Link to="./">
          <img
            src="https://frontendarmy.com/wp-content/uploads/2022/02/frontendarmy-logo.svg"
            alt="logo"
            className="m-2"
            width={100}
            
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          
          <li className="nav-item">
            <Link className="align-self-end text-light" to="/Read">
              Data
            </Link>
          </li>
          <li className="nav-item">
            <Link className="align-self-end text-light" to="/File">
              File Upload
            </Link>
          </li>
          <li className="nav-item">
            <Link className="align-self-end text-light" to="/dragcom">
              Drag Components
            </Link>
          </li>
          <li className="nav-item">
            <Link className="align-self-end text-light" to="/todo">
              To-Do List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="align-self-end text-light" to="/User">
              User
            </Link>
          </li>
          <li className="nav-item">
            <Link className="align-self-end text-light" to="/login" onClick={logout}>
              Log Out
            </Link>
          </li>
        </div>
        <li className="d-flex justify-content-between text-light">
          <h2 className="">React.js</h2>
        </li>
        
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Read" element={<Read />} />
      {/* <Route path="User" element={<User />} /> */}
      <Route path="Create" element={<Create />} />
      <Route path="Update" element={<Update />} />
      {/* <Route path="File" element={<File/>} /> */}
      <Route path="Dragcom" element={<Dragcom/>} />
      <Route path="Todo" element={<Todo/>}/>      <Route path="Register" element={<Register/>}/>
    <Route path="Login" element={<Login/>}/>
    </Routes>
    
    
  </BrowserRouter>
);





