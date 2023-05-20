import React from "react";
import Services from "../Pages/Services";
import Featured from "../Pages/Featured";
import Null from "../Pages/Null";
import Banner from "../Pages/Banner";
import Gallery from "../Pages/Gallery";

export default function Main() {
  return (
    <>
      <Banner />
      <Gallery/>
      <Null />
      <Services />
      <Featured />
    </>
  );
}
