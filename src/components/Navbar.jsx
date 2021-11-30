import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100",
      }}
    >
      <Link to="/">
        <h3> Home</h3>
      </Link>
      <Link to="/products">
        {" "}
        <h3> Products</h3>
      </Link>
    </div>
  );
};
