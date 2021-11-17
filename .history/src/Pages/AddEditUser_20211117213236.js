import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "../Styles/AddEditUser.css";
import { CreateUser, getUser } from "../Redux/Actions";
const initialState = {
  name: "",
  address: "",
  email: "",
  contact: "",
};

const AddEditUser = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { name, address, email, contact } = formValue;
  const { user } = useSelector((state) => state.data);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !address && !email && !contact) {
      toast.error("Please provide value into each input field");
    } else {
      dispatch(CreateUser(formValue, id));
      toast.success("User Added Successfully");
      setTimeout(() => navigate("/"), 500);
    }
  };
  useEffect(() => {
    dispatch(getUser(id));
    if (user) {
      setFormValue({ ...user });
    }
  }, [user, id]);
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name..."
            value={name || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Your address..."
            value={address || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email..."
            value={email || ""}
            onChange={handleInputChange}
          />
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="Your Contact No. ..."
            value={contact || ""}
            onChange={handleInputChange}
          />

          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default AddEditUser;
