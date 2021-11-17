import React from "react";

const UserInfo = () => {
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
