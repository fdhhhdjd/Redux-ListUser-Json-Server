import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../Redux/Actions";

const Home = () => {
  const { users, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  });
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
