import "./notFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <span>Oops! Page Not Found!</span>
      <h1>404</h1>
      <Link className="go-home" to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
