import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

export const Products = () => {
  const [prods, setProds] = useState([]);
  useEffect(() => {
    // fetch("https://reqres.in/api/users?page=2")
    fetch("http://localhost:3001/products/")
      .then((x) => x.json())
      .then((d) => {
        // console.log(d);
        setProds(d);
      });
  }, []);
  //   const getData = async () => {
  //     try {
  //       await fetch("https://reqres.in/api/users?page=1")
  //         .then((x) => x.json())
  //         .then((d) => {
  //           console.log(d.data);
  //           setProds(d.data);
  //         });
  //     } catch (err) {
  //       console.log("err", err);
  //     }
  //   };

  return (
    <div>
      <h2>Products</h2>
      {prods.map((e, i) => (
        <p key={i} className="products">
          {" "}
          <h3>{e.name}</h3>
          <Link to={`/product/${e.id}`} className="more"> more details</Link>{" "}
        </p>
      ))}
    </div>
  );
};
