import "../App.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Link to={"/new-pizza"}>
        <button>Add new Pizza</button>
      </Link>
      <Link to={"/pizzak"}>
        <button>All Pizzas</button>
      </Link>
    </>
  );
};

export default Index;
