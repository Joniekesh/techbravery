import { useState } from "react";
import "./resetPassword.scss";
import { toast, Toaster } from "sonner";
import { makeRequest } from "../../utils/makeRequest";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const resetToken = location.pathname.split("/")[2];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === "" || confirmPassword === "") {
      return toast.error("Password and confirm password are required!");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match!");
    }
    setLoading(true);
    try {
      const res = await makeRequest.put(`/auth/resetpassword/${resetToken}`, {
        password,
        resetToken,
      });

      if (res.status === 200) {
        toast.success(res.data);
        navigate("/login");
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data);
      setLoading(false);
    }
  };

  return (
    <div className="resetPassword">
      <Toaster position="top-right" richColors />
      <button className="backBtn" onClick={() => navigate(-1)}>
        Go Back
      </button>

      <div className="container">
        <h2>Forgot Password</h2>
        <p>
          Please enter the email you registered to this site. We will send you a
          reset link.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new confirm password"
          />
          <button type="submit">{loading ? "Loading..." : "RESET"}</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
