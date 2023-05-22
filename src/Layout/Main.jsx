import React from "react";
import Services from "../Pages/Services";
import Featured from "../Pages/Featured";
import Null from "../Pages/Null";
import Banner from "../Pages/Banner";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact";
import ToysByCategory from './../Components/Component/ToysByCategory/ToysByCategory';

export default function Main() {
  return (
    <>
      <Banner />
      <Gallery/>
    <ToysByCategory/>
      <Services />
      <Featured />
      <Contact/>
    </>
  );
}
