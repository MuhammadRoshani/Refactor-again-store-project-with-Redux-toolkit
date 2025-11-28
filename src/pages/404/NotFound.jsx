import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notFoundContainer">
      <h2>Page Not Found</h2>
      <Link to="/">Go To Home</Link>
    </div>
  );
}
export default NotFound;
