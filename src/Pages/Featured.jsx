import React from "react";
import "./style/featured.css";

import { FaStarHalfAlt, FaStar } from "react-icons/fa";

export default function Featured() {
  return (
    <section className="featured" id="featured">
      <h1 className="heading">
        our <span>gallery</span>
      </h1>

      <div className="featured--container">
        <div className="box">
          <img
            src={"https://i.ibb.co/zhnrL6v/pexels-daniel-158971.jpg"}
            alt=""
          />
        </div>
        <div className="box">
          <img
            src={"https://i.ibb.co/Mfr54vj/pexels-mike-bird-97353.jpg"}
            alt=""
          />
        </div>{" "}
        <div className="box">
          <img
            src={"https://i.ibb.co/4RgBsjh/pexels-markus-spiske-242200.jpg"}
            alt=""
          />
        </div>
        <div className="box">
          <img
            src={
              "https://i.ibb.co/nRvBD3t/pexels-the-lazy-artist-gallery-2527931.jpg"
            }
            alt=""
          />
        </div>{" "}
        <div className="box">
          <img
            src={"https://i.ibb.co/XbdG8sP/pexels-mike-bird-381228.jpg"}
            alt=""
          />
        </div>{" "}
        <div className="box">
          <img
            src={"https://i.ibb.co/xj96Vrd/pexels-mike-bird-97355.jpg"}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
