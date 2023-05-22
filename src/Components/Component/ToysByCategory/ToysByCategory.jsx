import React, { useEffect, useState } from "react";
import Toys_card from "../Toys_Card/Toys_card";
import "../style/toyscategory.css";

const ToysByCategory = () => {
  const [activeTab, setActiveTab] = useState("");
  const [selectCategory, setSelectcategory] = useState([]);
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/toyByCategory/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setSelectcategory(result);
      });
  }, [activeTab]);

  return (
    <section className="category">
      <div className="heading">
        <h3>
          Click the category option tab
          <span> Sub-Category</span>
        </h3>
      </div>

      <div className="category--tab">
        <button
          onClick={() => handleTabClick("sports_car")}
          className={`border-4 font-bold border-red-800 rounded-md w-40 py-1 mr-4  ${
            activeTab == "sports_car" ? " bg-red-700 text-white" : ""
          }`}
        >
          Sports Cars
        </button>

        <button
          onClick={() => handleTabClick("track")}
          className={`border-4 font-bold border-red-800 rounded-md w-40 py-1  mr-4 ${
            activeTab == "track" ? " bg-red-700 text-white" : ""
          }`}
        >
          Truck
        </button>

        <button
          onClick={() => handleTabClick("regular_car")}
          className={`border-4 font-bold border-red-800 rounded-md w-40 py-1 mr-4 ${
            activeTab == "regular_car" ? " bg-red-700 text-white" : ""
          }`}
        >
          Regular Cars
        </button>

        <button
          onClick={() => handleTabClick("fire_car")}
          className={`border-4 font-bold border-red-800 rounded-md w-40 py-1 mr-4 ${
            activeTab == "fire_car" ? " bg-red-700 text-white" : ""
          }`}
        >
          Fire Cars
        </button>

        <button
          onClick={() => handleTabClick("police_car")}
          className={` border-4 font-bold border-red-800 rounded-md w-40 py-1 mr-4 ${
            activeTab == "police_car" ? " bg-red-700 text-white" : ""
          }`}
        >
          Police Cars
        </button>
      </div>

      <div className="toy--card">
        {selectCategory.map((toy) => (
          <Toys_card key={toy._id} toy={toy}></Toys_card>
        ))}
      </div>
    </section>
  );
};

export default ToysByCategory;
