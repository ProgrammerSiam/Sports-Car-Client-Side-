import React from "react";
import { useLoaderData } from "react-router-dom";
import "../style/details.css";
const Details = () => {
  const toysDetails = useLoaderData();

  // console.log(toysDetails);

  const {
    description,
    email,
    price,
    quantity,
    rating,
    seller_name,
    sub_category,
    toys_image,
    toys_name,
    _id,
  } = toysDetails;

  return (
    <section className="details">
      <div className="details--container">
        <div className="details--img">
          <img src={toys_image} />
        </div>

        <div className="details--content">
          <h3>Model : {toys_name}</h3>
          <p >Price : {price}</p>
          <p >Rating : {rating}</p>
          <p >Quantity : {quantity}</p>
          <p >Description : {description}</p>
          <p>Seller : {seller_name}</p>
          <p>Seller Email :{email}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
