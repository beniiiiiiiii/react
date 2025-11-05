import "../App.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404. Page not Found</h1>
      <Link to={"/home"}>
        <button>Go Home</button>
      </Link>
    </>
  );
};

export default NotFound;
