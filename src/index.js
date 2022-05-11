import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Read from "./components/read/Read";
import Create from "./components/create/Create";
import { Link } from "react-router-dom";
import "./App.css";
import Update from "./components/update/Update";

const root = ReactDOM.createRoot(document.getElementById("root"));
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
            <Link className="  align-self-end text-light" to="/Create">
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link className="align-self-end text-light" to="/Read">
              Read
            </Link>
          </li>
        </div>
        <li className="d-flex justify-content-between text-light">
          <h2 className="">React Crud Operation</h2>
        </li>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Read" element={<Read />} />
      <Route path="Create" element={<Create />} />
      <Route path="Update" element={<Update />} />
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
