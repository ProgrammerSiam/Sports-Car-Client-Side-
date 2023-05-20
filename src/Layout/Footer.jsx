import React from "react";

import {
  FaMapMarkerAlt,
  FaAngleRight,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import "./Style/footer.css";
export default function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <h3>our branches</h3>
          <a href="#">
            <i>
              <FaMapMarkerAlt />
            </i>
            india
          </a>
          <a href="#">
            <i>
              <FaMapMarkerAlt />
            </i>
            japan
          </a>
          <a href="#">
            <i>
              <FaMapMarkerAlt />
            </i>
            france
          </a>
          <a href="#">
            <i>
              <FaMapMarkerAlt />
            </i>
            russia
          </a>
          <a href="#">
            <i>
              <FaMapMarkerAlt />
            </i>
            USA
          </a>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <a href="#">
            <i>
              <FaAngleRight />
            </i>
            home
          </a>
          <a href="#">
            <i>
              <FaAngleRight />
            </i>
            vehicles
          </a>
          <a href="#">
            <i>
              <FaAngleRight />
            </i>
            services
          </a>
          <a href="#">
            <i>
              <FaAngleRight />
            </i>
            featured
          </a>
          <a href="#">
            <i>
              <FaAngleRight />
            </i>
            reviews
          </a>
          <a href="#">
            <i>
              <FaAngleRight />
            </i>
            contact
          </a>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <a href="#">
            <i>
              <FaPhone />
            </i>
            +123-456-7890
          </a>
          <a href="#">
            <i>
              <FaPhone />
            </i>
            +111-222-3333
          </a>
          <a href="#">
            <i>
              <FaEnvelope />
            </i>
            shaikhanas@gmail.com
          </a>
          <a href="#">
            <i>
              <FaMapMarkerAlt />
            </i>
            mumbai, india - 400104
          </a>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <a href="#">
            <i>
              <FaFacebookF />
            </i>
            facebook
          </a>
          <a href="#">
            <i>
              <FaTwitter />
            </i>
            twitter
          </a>
          <a href="#">
            <i>
              <FaInstagram />
            </i>
            instagram
          </a>
          <a href="#">
            <i>
              <FaLinkedinIn />
            </i>
            linkedin
          </a>
          <a href="#">
            <i>
              <FaPinterest />
            </i>
            pinterest
          </a>
        </div>
      </div>
      <div className="credit">
        © 2023 Mehedi Hasan Siam. All rights reserved.
      </div>
    </section>
  );
}
