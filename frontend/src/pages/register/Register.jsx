import { useDispatch, useSelector } from "react-redux";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../redux/actions/AuthAction";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(error);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstname = e.target[0].value;
    const lastname = e.target[1].value;
    const email = e.target[2].value;
    const phone = e.target[3].value;
    const country = e.target[4].value;
    const password = e.target[5].value;
    const repeatpassword = e.target[6].value;

    if (password !== repeatpassword) {
      return toast.error("Password do not match!", { theme: "colored" });
    }

    const data = {
      firstname,
      lastname,
      email,
      phone,
      country,
      password,
    };

    dispatch(register(data));
    navigate("/login");
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter first name" />
        <input type="text" placeholder="Enter last name" />
        <input type="email" placeholder="Enter email" />
        <input type="text" placeholder="Enter phone number" />
        <input type="text" placeholder="Enter country" />
        <input type="password" placeholder="Enter password" />
        <input type="password" placeholder="Repeat password" />
        <div className="action">
          <span>Already Have an Account?</span>
          <Link to="/login" className="log">
            Login
          </Link>
        </div>
        <button type="submit">{loading ? "Loading..." : "REGISTER"}</button>
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
