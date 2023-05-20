import React from "react";
import "./style/services.css";
export default function Services() {
  return (
    <section className="services" id="services">
      <h3 className="heading">
        our <span>services</span>
      </h3>
      <div className="box-container">
        <div className="box">
          <i className="fas fa-car" />
          <h3>car selling</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            nisi.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <i className="fas fa-tools" />
          <h3>parts repair</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            nisi.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <i className="fas fa-car-crash" />
          <h3>car insurance</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            nisi.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <i className="fas fa-car-battery" />
          <h3>battery replacement</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            nisi.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <i className="fas fa-gas-pump" />
          <h3>oil change</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            nisi.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <i className="fas fa-headset" />
          <h3>24/7 support</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            nisi.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </div>
    </section>
  );
}
