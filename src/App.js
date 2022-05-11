import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://6273b645345e1821b2200dff.mockapi.io/crud1`)
      .then((getData) => {
        setAPIData(getData.data);
        console.log("DATA");
      })
      .catch((err) => {
        setAPIData([]);
      });
  };

  var count = Object.keys(APIData).length;
  console.log(count);
  return (
    <div class="container">
      <div class="row">
        <div className="text boxui col-sm">
        
          Total Data <span></span>
          {count}
        </div>
        <div className="text boxui col-sm ">
        
          Total Data <span></span>
          {count}
        </div>
        <div className="text boxui col-sm ">
        
          Total Data <span></span>
          {count}
        </div>
        <div className="text boxui col-sm ">
        
          Total Data <span></span>
          {count}
        </div>
        <div className="text boxui col-sm ">
        
          Total Data <span></span>
          {count}
        </div>
      </div>
    </div>
  );
}
