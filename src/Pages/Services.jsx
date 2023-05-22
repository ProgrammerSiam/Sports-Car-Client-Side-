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
          <h3>car selling</h3>
          <p>
            If you're considering upgrading your mining vehicle fleet or have
            vehicles that you no longer require, we offer a convenient and
            hassle-free car selling service.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <h3>parts repair</h3>

          <p>
            In the event of component failures or damage to specific parts of
            your mining vehicles, our skilled technicians are experienced in
            parts repair.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <h3>car insurance</h3>
          <p>
            Protecting your mining vehicles and investments is crucial. At Spot
            Mining Car, we offer comprehensive car insurance services tailored
            to the mining industry.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <h3>battery replacement</h3>
          <p>
            Mining vehicles rely heavily on powerful batteries to operate
            efficiently. If you're experiencing battery issues or need a battery
            replacement, we have you covered.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <h3>oil change</h3>
          <p>
            Proper maintenance and regular oil changes are vital for the smooth
            operation and longevity of your mining vehicles.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
        <div className="box">
          <h3>24/7 support</h3>
          <p>
            We understand that mining operations don't adhere to a fixed
            schedule, and emergencies can happen at any time.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </div>
    </section>
  );
}
