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
            dhaka
          </a>
          <a href="#">
            <i>
              <FaMapMarkerAlt />
            </i>
            pabna
          </a>
          <a href="#">
            <i>
              <FaMapMarkerAlt />
            </i>
            joshor
          </a>
          <a href="#">
            <i>
              <FaMapMarkerAlt />
            </i>
            kushtiya
          </a>
          <a href="#">
            <i>
              <FaMapMarkerAlt />
            </i>
            rajshahi
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
            blog
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
            gallery
          </a>
          <a href="#">
            <i>
              <FaAngleRight />
            </i>
            category
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
            +088-013-101010
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
            example@gmail.com
          </a>
          <a href="#">
            <i>
              <FaMapMarkerAlt />
            </i>
            dhaka, bangladesh - 6000
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
