import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
const UserInfo = () => {
  const { user } = useSelector((state) => state.data);
  const { id } = useParams();
  const singleUser = user.find((item) => item.id === Number(id));
  useEffect(() => {
    dispatch(getUser(id));
  }, []);
  return (
    <>
      <div style={{ marginTop: "150px" }}>
        <div className="card">
          <div className="card-header">
            <p>User Contact Detail</p>
          </div>
          <div className="container">
            <strong>ID: </strong>
            <span>{id}</span>
            <br />
            <br />
            <strong>Name: </strong>
            <span>{singleUser.name}</span>
            <br />
            <br />
            <strong>Email: </strong>
            <span>{singleUser.email}</span>
            <br />
            <br />
            <strong>Contact: </strong>
            <span>{singleUser.phone}</span>
            <br />
            <br />
            <Link to="/">
              <button className="btn btn-edit">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
