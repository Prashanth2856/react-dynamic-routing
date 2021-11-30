import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Products.css";

export const ProductDetails = () => {
  const { id } = useParams();
  // console.log(data);
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/products/${id}`)
      .then((x) => x.json())
      .then((d) => {
        setProd(d);
      });
  }, [id]);

  return (
    <div className="details">
      <h3>{prod.id}</h3>
      <h3> Product Name: {prod.name}</h3>
      <h3> Price: {prod.price} </h3>
      <p>
        <h3>More Details:</h3> {prod.moredetails}
      </p>
    </div>
  );
};
