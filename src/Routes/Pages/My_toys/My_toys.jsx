import React, { useEffect, useState } from "react";
// import AddedToysList from "./../../../Components/Component/AddedToysLIst/AddedToysList";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Features/Auth/AuthProvider";
// import { AuthContext } from '../../AuthProvaider/Provaider';
import AddedToysList from "./../../../Components/Component/AddedToysLIst/AddedToysList";

import '../style/mytoy.css'

const My_toys = () => {
  const { user } = useContext(AuthContext);
  // console.log(user?.email)
  const [addedtoys, setAddedtoys] = useState([]);

  const url = `http://localhost:5000/mytoys?email=${user?.email}`;
console.log(addedtoys)
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddedtoys(data));
  }, [url]);

  // console.log(addedtoys)
  const deleteItems = (_id) => {
    console.log("delete");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/mytoys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              console.log(_id);
              const remainingToys = addedtoys.filter((toy) => toy._id !== _id);
              setAddedtoys(remainingToys);
            }
          });
      }
    });
  };

  return (
    <section className="my--toy">
      <h3 className="heading">my toys : {addedtoys.length}</h3>
      <div className="my--toy--content">
        <div className="content">
          <h3>Toys</h3>
          <h3>Toys Name</h3>
          <h3>Toys Category</h3>
          <h3>Quantity</h3>
          <h3>Seller Email</h3>
          <h3>Details</h3>
          <h3>Delete / Update</h3>
        </div>

        {addedtoys.map((toy) => (
          <AddedToysList
            toy={toy}
            key={toy._id}
            deleteItems={deleteItems}
          ></AddedToysList>
        ))}
      </div>
    </section>
  );
};

export default My_toys;