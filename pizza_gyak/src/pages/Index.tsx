import "../App.css";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <>
      <Link to={"/new-pizza"}>
        <button>Add new pizza</button>
      </Link>
      <Link to={"/edit-pizza/:id"}>
        <button>Edit a pizza</button>
      </Link>
      <Link to={"/pizzak"}>
        <button>All pizzas</button>
      </Link>
    </>
  );
};

export default Index;
