import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./components/read/Read";
import Create from "./components/create/Create";
import Update from "./components/update/Update";
import Dragcom from "./components/dragcom/Dragcom";
import Todo from "./components/todo/Todo";
// import New from "./components/read/New";
import Newdata from "./components/read/Newdata";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/login/Signup";
import File from "./components/file/File";
import User from "./components/user/User";
import Sigin from "./components/LoginAPI/Sigin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import "../src/App.css"
import Dashboard from "./components/dashboard/Dashboard";
var isLoggedIn = localStorage.getItem("accessToken");
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <>
                <Navbar />

                <Dashboard />
              </>
            ) : (
              <Sigin />
            )
          }
        />
        <Route
          path="/Read"
          element={
            isLoggedIn ? (
              <>
                <Navbar />
                <Read />
              </>
            ) : (
              <Sigin />
            )
          }
        />
        <Route
          path="/Create"
          element={
            isLoggedIn ? (
              <>
                <Navbar />
                <Create />
              </>
            ) : (
              <Sigin />
            )
          }
        />
        <Route
          path="/update/:id"
          element={
            isLoggedIn ? (
              <>
                <Navbar />
                <Update />
              </>
            ) : (
              <Sigin />
            )
          }
        />

        {/* <Route
          path="/New"
          element={
            isLoggedIn ? (
              <>
                <Navbar />
                <New />
              </>
            ) : (
              <Sigin />
            )
          }
        /> */}
        <Route
          path="/Dragcom"
          element={
            isLoggedIn ? (
              <>
                <Navbar />
                <Dragcom />
              </>
            ) : (
              <Sigin />
            )
          }
        />
        <Route
          path="/Todo"
          element={
            isLoggedIn ? (
              <>
                <Navbar />
                <Todo />
              </>
            ) : (
              <Sigin />
            )
          }
        />

        <Route
          path="/Newdata"
          element={
            isLoggedIn ? (
              <>
                <Navbar />
                <Newdata />
              </>
            ) : (
              <Signup />
            )
          }
        />
        <Route
          path="/File"
          element={
            <>
              <Navbar />
              <File />
            </>
          }
        />
        <Route
          path="/User"
          element={
            <>
              <Navbar />
              <User />
            </>
          }
        />

        <Route path="/Signup" element={<Signup />} />
        <Route path="/Sigin" element={<Sigin />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}
