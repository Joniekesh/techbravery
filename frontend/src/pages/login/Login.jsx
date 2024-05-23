import "./login.scss";
import { getMetaData } from "../../utils/getMetaDate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/AuthAction";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Toaster } from "sonner";

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
      <Toaster position="top-right" richColors />

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />
        <div className="rDiv">
          <div className="remember">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <Link to="/forgotpassword" className="forgot">
            <span>Forgort Password?</span>
          </Link>
        </div>
        <button type="submit">{loading ? "Loading..." : "LOGIN"}</button>
        <div className="action">
          <span>Don't Have an Account?</span>
          <Link to="/register" className="reg">
            <span>Register</span>
          </Link>
        </div>
        <span className="or">OR</span>
        <div className="google">
          <img src="/assets/googleIcon.png" alt="" />
          <span>Sign In with Google</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
