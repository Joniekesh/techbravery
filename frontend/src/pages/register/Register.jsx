import { useDispatch, useSelector } from "react-redux";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useEffect, useState } from "react";
import {
  registerFailure,
  registerRequest,
  registerSuccess,
} from "../../redux/reducers/AuthReducer";
import { makeRequest } from "../../utils/makeRequest";
import { getMetaData } from "../../utils/getMetaData";

const Register = () => {
  const [show, setShow] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    currentUser && navigate("/");
  }, [currentUser]);

  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    country: "",
    password: "",
    repeatpassword: "",
  });

  const [loginInputs, setloginInputs] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  console.log(loginInputs);

  const { fullname, email, country, password, repeatpassword } = inputs;

  const isEmpty =
    fullname === "" ||
    email === "" ||
    country === "" ||
    password === "" ||
    repeatpassword === "";

  const isEmptylogin =
    loginInputs.loginEmail === "" || loginInputs.loginPassword === "";

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginChange = (e) => {
    setloginInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (password !== repeatpassword) {
        return toast.error("Password do not match!", { theme: "colored" });
      }

      // dispatch(registerRequest());
      try {
        const res = await makeRequest.post("/auth");
        console.log(res.data);
        if (res.status === 201) {
          // dispatch(registerSuccess(res.data));
          toast.success("Registeration succesfull");
          // navigate("/login");
        }
      } catch (err) {
        // dispatch(registerFailure(err?.response?.data));
        console.log(err);
        toast.error(err?.response?.data);
      }
    } else {
      const metaData = await getMetaData();

      const data = {
        email: loginInputs.loginEmail,
        password: loginInputs.loginPassword,
        lastloginDetails: metaData,
      };

      dispatch(login(data));
      currentUser && navigate(`/${currentUser?.role}`);
    }
  };

  return (
    <div className="register">
      <div
        className={isSignUp ? "register-container" : "register-container login"}
      >
        <div className="register-top"></div>
        <div className="circle"></div>
        <div className="circle circle2"></div>

        <Link to="/" className="logo">
          <img src="/logo8.jpg" alt="" />
        </Link>
        {isSignUp ? (
          <form onSubmit={handleSubmit}>
            <div className="titles">
              <span
                onClick={() => setIsSignUp(false)}
                className={isSignUp === false && "active"}
              >
                Sign In
              </span>
              <span
                onClick={() => setIsSignUp(true)}
                className={isSignUp === true && "active"}
              >
                Sign Up
              </span>
            </div>
            <input
              type="text"
              placeholder="Enter full name"
              name="fullname"
              value={fullname}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter country"
              name="country"
              value={country}
              onChange={handleChange}
            />
            <div className="passwordInput">
              <input
                type={show ? "text" : "password"}
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              {show ? (
                <FaRegEye
                  className="icon"
                  onClick={() => setShow((prev) => !prev)}
                />
              ) : (
                <FaRegEyeSlash
                  className="icon"
                  onClick={() => setShow((prev) => !prev)}
                />
              )}
            </div>
            <div className="passwordInput">
              <input
                type={show ? "text" : "password"}
                placeholder="Confirm password"
                name="repeatpassword"
                value={repeatpassword}
                onChange={handleChange}
              />
              {show ? (
                <FaRegEye
                  className="icon"
                  onClick={() => setShow((prev) => !prev)}
                />
              ) : (
                <FaRegEyeSlash
                  className="icon"
                  onClick={() => setShow((prev) => !prev)}
                />
              )}
            </div>
            <div className="action">
              <span>Already Have an Account?</span>
              <div onClick={() => setIsSignUp(false)} className="log">
                Login
              </div>
            </div>
            <button type="submit" disabled={isEmpty}>
              {loading ? "Loading..." : "REGISTER"}
            </button>
            <span className="or">OR</span>
            <div className="google">
              <img src="/googleIcon.png" alt="" />
              <span>Sign In with Google</span>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="titles">
              <span
                onClick={() => setIsSignUp(false)}
                className={isSignUp === false && "active"}
              >
                Sign In
              </span>
              <span
                onClick={() => setIsSignUp(true)}
                className={isSignUp === true && "active"}
              >
                Sign Up
              </span>
            </div>

            <input
              type="email"
              placeholder="Enter email"
              name="loginEmail"
              value={loginInputs.loginEmail}
              onChange={handleLoginChange}
            />

            <div className="passwordInput">
              <input
                type={show ? "text" : "password"}
                placeholder="Enter password"
                name="loginPassword"
                value={loginInputs.loginPassword}
                onChange={handleLoginChange}
              />
              {show ? (
                <FaRegEye
                  className="icon"
                  onClick={() => setShow((prev) => !prev)}
                />
              ) : (
                <FaRegEyeSlash
                  className="icon"
                  onClick={() => setShow((prev) => !prev)}
                />
              )}
            </div>

            <div className="action">
              <span>Dont't Have an Account?</span>
              <div onClick={() => setIsSignUp(true)} className="log">
                Register
              </div>
            </div>
            <button type="submit" disabled={isEmptylogin}>
              {loading ? "Loading..." : "LOGIN"}
            </button>
            <span className="or">OR</span>
            <div className="google">
              <img src="/googleIcon.png" alt="" />
              <span>Sign In with Google</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
