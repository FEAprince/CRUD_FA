import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  userHandlerpostData,
  userHandlergetData,
  userHandlerDataDelete,
} from "../service/auth.service";

function UserList(props) {
  const [userData, setUserData] = useState(null);
  const [APIDataUser, setAPIDataUser] = useState([]);
  useEffect(() => {
    getDataUser();
  }, []);
  const body = {
    id: localStorage.getItem("id"),
  }; 

  const onDelete = async (id) => {
    const response = await userHandlerDataDelete(body, id);
    setUserData(response.data);
    getPosts();
  };

  useEffect(() => {
    setUserData(props.posts);
  }, [props]);


  const getPosts = async () => {
    const response = await userHandlerpostData(body);
    setUserData(response.data);
  };

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    const response = await userHandlergetData(body);
    setAPIDataUser(response.data);
  };

  var countUser = Object.keys(APIDataUser).length;

  if (props.loading) {
    return <div className="spinner-grow m" role="status" />;
  }

  return (
    <div>
      <div className="text tableui col-sm">
        Total User <br /> <span></span>
        {countUser}
      </div>
      <table className="table table-bordered tableui2">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Profile Id</th>
            <th scope="col">Profile Photo</th>
            <th scope="col">First Name</th>
            <th scope="col">Cration Date</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          {userData &&
            userData.map((post, index) => (
              <tr key={post.id}>
                <td>{index + 1}</td>
                <td>{post.id}</td>
                <td>
                  <img className="profiimg" src={post.avatar} alt="img" />
                </td>

                <td>{post.name}</td>

                <td>{moment(post.createdAt).format("DD-MM-YY h:mm:ss A")},</td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(post.id)}
                  >
                    Delete
                  </button>
                </td>
                {/* <td>{post.body}</td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default UserList;
