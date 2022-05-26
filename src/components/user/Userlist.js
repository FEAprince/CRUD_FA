import React, { useEffect, useState } from "react";
import axios from "axios";
function UserList(props) {
  const [userData, setUserData] = useState(null);
  const [APIDataUser, setAPIDataUser] = useState([]);
  useEffect(() => {
    getDataUser();
  }, []);

  const onDelete = (id) => {
    axios
      .delete(`https://6273b645345e1821b2200dff.mockapi.io/login/${id}/`)
      .then(() => {
        getPosts();
      });
  };

  useEffect(() => {
    setUserData(props.posts);
  }, [props]);

  const getPosts = async () => {
    const results = await axios.get(
      "https://6273b645345e1821b2200dff.mockapi.io/login"
    );
    
    setUserData(results.data);
  };
  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = () => {
    axios
      .get(`https://6273b645345e1821b2200dff.mockapi.io/login`)
      .then((getDataUser) => {
        setAPIDataUser(getDataUser.data);
        
      })
      .catch((err) => {
        setAPIDataUser([]);
      });
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

                <td>{post.createdAt}</td>
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
