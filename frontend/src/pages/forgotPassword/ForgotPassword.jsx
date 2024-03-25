import { useState } from "react";
import "./forgotPassword.scss";
import { toast, Toaster } from "sonner";
import { makeRequest } from "../../utils/makeRequest";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  console.log(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      return toast.error("Email is requred!");
    }
    setLoading(true);
    try {
      const res = await makeRequest.put("/auth/forgotpassword", { email });

      if (res.status === 200) {
        console.log(res);
        toast.success(res.data);
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data);
      setLoading(false);
    }
  };

  return (
    <div className="forgotPassword">
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
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button disabled={email === ""} type="submit">
            {loading ? "Loading..." : "SEND"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
