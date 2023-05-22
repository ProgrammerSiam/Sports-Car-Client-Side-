import React from "react";
import { Link } from "react-router-dom";
import "../style/toycard.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'

const Toys_card = ({ toy }) => {
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

  return (
    <section className="category-card">
      <div className="category">
        
       <div className="category--content">
        <img src={toys_image} alt="car" />

        <h3>Model : {toys_name}</h3>
        <h4>Price : {price} $</h4>
        <p>Rating : {rating}</p>
        {/* <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        readOnly
                    /> */}

        <Link className="button" to={`/toysDetails/${_id}`}>
          <FaArrowAltCircleRight />
        </Link>
       </div>
       
      </div>
    </section>
  );
};

export default Toys_card;
