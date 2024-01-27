import "./login.scss";
import { getMetaData } from "../../utils/getMetaDate";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/AuthAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

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
        <input type="password" placeholder="Enter password" />
        <div className="action">
          <Link to="/forgotpassword">
            <span>Forgot password?</span>
          </Link>
          <Link to="/register">
            <span>Don't Have an Account?</span>
          </Link>
        </div>
        <button type="submit">{loading ? "Loading..." : "LOGIN"}</button>
      </form>
    </div>
  );
};

export default Login;
