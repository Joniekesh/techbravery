import { useDispatch, useSelector } from "react-redux";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import {
  registerFailure,
  registerRequest,
  registerSuccess,
} from "../../redux/reducers/AuthReducer";
import { makeRequest } from "../../utils/makeRequest";

const Register = () => {
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    repeatpassword: "",
  });

  const {
    firstname,
    lastname,
    email,
    phone,
    country,
    password,
    repeatpassword,
  } = inputs;

  const isEmpty =
    firstname === "" ||
    lastname === "" ||
    email === "" ||
    phone === "" ||
    country === "" ||
    password === "" ||
    repeatpassword === "";

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { loading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter first name"
          name="firstname"
          value={firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter last name"
          name="lastname"
          value={lastname}
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
          placeholder="Enter phone number"
          name="phone"
          value={phone}
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
          <Link to="/login" className="log">
            Login
          </Link>
        </div>
        <button type="submit" disabled={isEmpty}>
          {loading ? "Loading..." : "REGISTER"}
        </button>
        <span className="or">OR</span>
        <div className="google">
          <img src="/assets/googleIcon.png" alt="" />
          <span>Sign In with Google</span>
        </div>
      </form>
    </div>
  );
};

export default Register;
