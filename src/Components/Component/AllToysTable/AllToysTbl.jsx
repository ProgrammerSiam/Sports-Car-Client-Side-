import React from "react";
import { Link } from "react-router-dom";
import "../style/alltoytable.css";

const AllToysTbl = ({ toy }) => {
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
  } = toy;
  console.log(toy);

  return (
    <section className="toy--table">
      <div className="table--content">
        <h3 className="font-bold">{toys_name}</h3>

        <h3 className="font-bold">{sub_category}</h3>

        <h3 className="font-bold">{price} $</h3>

        <h3 className="font-bold">{quantity} </h3>

        <h3 className="font-bold opacity-50">{seller_name}</h3>

        <button className="button">
          <Link className="link" to={`/toysDetails/${_id}`}>
            Details
          </Link>
        </button>
      </div>
    </section>
  );
};

export default AllToysTbl;
