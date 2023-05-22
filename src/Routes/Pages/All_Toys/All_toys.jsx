import React, { useEffect, useState } from "react";
import AllToysTbl from "../../../Components/Component/AllToysTable/AllToysTbl";
import "../style/alltoy.css";
// import Lottie from "lottie-react";
// import noDataFound from "../../assets/no data found.json";
const All_toys = () => {
  const [alltoys, setAlltoys] = useState([]);
  const [searchToy, setSearchToy] = useState("");
  const [searchResult, setSearchresult] = useState(true);

  // const allToysUrl = 'https://toye-data-server.vercel.app/toys'
  const allToysUrl = "http://localhost:5000/toys";

  useEffect(() => {
    fetch(allToysUrl)
      .then((res) => res.json())
      .then((data) => {
        setAlltoys(data);
        if (data.length == 0) {
          setSearchresult(false);
        }
      });
  }, [allToysUrl]);
  

  
  // console.log(alltoys.length)

  const handleSearch = () => {
    fetch(`http://localhost:5000/toysBySearch/${searchToy}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAlltoys(data);
        if (data.length === 0) {
          setSearchresult(false);
        } else {
          setSearchresult(true);
        }
      });
  };

  return (
    <section className="all--toy">
      <h1 className="heading">toys Length : {alltoys.length}</h1>

      <div className="toy--content">
        <div className="search--toy">
          <input
            onChange={(e) => setSearchToy(e.target.value)}
            type="text"
            placeholder="Search in sub Category "
          />
          <button  className="button" onClick={handleSearch}>Search</button>
        </div>

        <div className="toy--content">
            
    <section className="content">
              <h3>Toys Name</h3>
          <h3>Toys Category</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Seller</h3>
          <h3>Details</h3>
    </section>

          {searchResult ? (
            <>
              {alltoys.map((toy) => (
                <AllToysTbl toy={toy} key={toy._id}></AllToysTbl>
              ))}
            </>
          ) : (
            <>
              <h1>no data</h1>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default All_toys;