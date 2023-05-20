import React from "react";
import "./style/gallery.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.min.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Gallery() {
  return (
    // <section className="mySwiper">
    //   <h3 className="heading">
    //     our <span>gallery</span>
    //   </h3>

    //   <Swiper className="swiper">
    //     {/* Slide 1 */}
    //     {/* <SwiperSlide>
    //       <img
    //         src={"https://i.ibb.co/0Q0jvWh/pexels-igor-photic-3801089.jpg"}
    //         alt=""
    //       />
    //     </SwiperSlide> */}

    //     {/* Slide 2 */}
    //     <SwiperSlide>
    // <img
    //   src={"https://i.ibb.co/mRjRtcF/pexels-philbert-pembani-3991204.jpg"}
    //   alt=""
    // />
    //     </SwiperSlide>

    //     {/* Slide 3 */}
    //     <SwiperSlide>
    //       <img
    //         src={"https://i.ibb.co/3Bjfvtm/pexels-romka-2065641.jpg"}
    //         alt=""
    //       />
    //     </SwiperSlide>

    //     {/* Slide 4 */}
    //     <SwiperSlide>
    //       <img
    //         src={"https://i.ibb.co/j8BKrSR/pexels-thales-silva-772393.jpg"}
    //         alt=""
    //       />
    //     </SwiperSlide>

    //     {/* Slide 5 */}
    //     <SwiperSlide>
    // <img
    //   src={
    //     "https://i.ibb.co/3MYZ8kC/pexels-claiton-luis-moraes-12720687.jpg"
    //   }
    //   alt=""
    // />
    //     </SwiperSlide>

    //     {/* Slide 6 */}
    //     <SwiperSlide>
    //       <img
    //         src={"https://i.ibb.co/z7Rx8BB/pexels-photo-92615.webp"}
    //         alt=""
    //       />
    //     </SwiperSlide>
    //   </Swiper>
    // </section>

    <section className="gallery">
      <h3 className="heading">
        our <span>gallery</span>
      </h3>

      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="gallery--container"
      >
        <SwiperSlide className="content">
          <img
            src={"https://i.ibb.co/mRjRtcF/pexels-philbert-pembani-3991204.jpg"}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="content">
          <img
            src={"https://i.ibb.co/mRjRtcF/pexels-philbert-pembani-3991204.jpg"}
            alt=""
          />
        </SwiperSlide>{" "}
        <SwiperSlide className="content">
          <img
            src={"https://i.ibb.co/mRjRtcF/pexels-philbert-pembani-3991204.jpg"}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
