import React from "react";
import "./style/banner.css";


import { FaAngleDoubleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.min.css";

export default function Banner() {


  return (
    <section className="home" id="home">
      <Swiper grabCursor={true}  className="swiper_container">
        <SwiperSlide className="slide">
          <div className="swiper-slide">
            <div
              className="box"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                aspectRatio: "2/4",

                background:
                  "url(https://i.ibb.co/552zD9H/pexels-moose-photos-1037995.jpg) no-repeat",
              }}
            >
              <div className="content">
                <h3 data-aos="fade-up" data-aos-delay={150}>
                  exploring
                </h3>
                <p data-aos="fade-up" data-aos-delay={300}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit unde ex molestias soluta consequatur saepe aliquam,
                  excepturi delectus consequuntur minus!
                </p>
                <a
                  data-aos="fade-up"
                  data-aos-delay={450}
                  href="#"
                  className="button button--flex"
                >
                  get started
                  <span className="button__icon">
                    <FaAngleDoubleRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide">
          <div className="swiper-slide">
            <div
              className="box"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                aspectRatio: "2/4",

                background:
                  "url(https://i.ibb.co/2MfsNGX/pexels-ds-stories-10215987.jpg) no-repeat",
              }}
            >
              <div className="content">
                <h3 data-aos="fade-up" data-aos-delay={150}>
                  exploring
                </h3>
                <p data-aos="fade-up" data-aos-delay={300}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit unde ex molestias soluta consequatur saepe aliquam,
                  excepturi delectus consequuntur minus!
                </p>
                <a
                  data-aos="fade-up"
                  data-aos-delay={450}
                  href="#"
                  className="button button--flex"
                >
                  get started
                  <span className="button__icon">
                    <FaAngleDoubleRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
