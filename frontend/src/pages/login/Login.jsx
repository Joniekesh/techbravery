import "./login.scss";
import { getMetaData } from "../../utils/getMetaDate";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/AuthAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { currentUser, loading, error } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    currentUser && navigate("/");
  }, [currentUser]);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const metaData = await getMetaData();

    const email = e.target[0].value;
    const password = e.target[1].value;

    const data = {
      email,
      password,
      lastloginDetails: metaData,
    };

    dispatch(login(data));
    currentUser && navigate(`/${currentUser?.role}`);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter email" />
        <input type="text" placeholder="Enter password" />
        <button type="submit">{loading ? "Loading..." : "LOGIN"}</button>
      </form>
      {/* {currentUser && <span>{currentUser.lastloginDetails.time}</span>}
      {error && toast.error(error)} */}
    </div>
  );
};

export default Login;
