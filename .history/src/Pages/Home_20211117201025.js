import React, { useEffect } from "react";
import "../Styles/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, DeleteUser } from "../Redux/Actions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Home = () => {
  const { users, error } = useSelector((state) => state.data);
  console.log(error, "error");
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (error) {
      toast.error(error);
    } else if (window.confirm("Are you sure you want to delete")) {
      dispatch(DeleteUser(id), toast.success("Your Delete Success !"));
    }
    if (window.confirm("Are you sure you want to delete")) {
      if (error) {
        return toast.error(error);
      } else {
        dispatch(DeleteUser(id), toast.success("Your Delete Success !"));
      }
    }
  };
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>ID</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>Address</th>
              <th style={{ textAlign: "center" }}>Email</th>
              <th style={{ textAlign: "center" }}>Phone</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>
                      <Link to={`/editUser/${item.id}`}>
                        <button className="btn btn-edit">Edit</button>
                      </Link>
                      <button
                        className="btn btn-delete"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                      <Link to={`/userInfo/${item.id}`}>
                        <button className="btn btn-view">View</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
