import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import "../style/addtoy.css";

import { toast } from "react-toastify";

import { AuthContext } from "./../../../Features/Auth/AuthProvider";

const Add_toys = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(
      "https://server-side-qthr3ewfi-mehediinfo10101-gmailcom.vercel.app/addtoys",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("successfully add");
        }
      });
  };

  console.log(watch("example"));

  return (
    <section className="add--toy">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="add--toy--content">
          <div>
            <input
              {...register("toys_name", { required: true })}
              placeholder="toy name"
            />
            <input
              {...register("sub_category", { required: true })}
              placeholder="sub category"
            />

            <select
              {...register("sub_category")}
              defaultValue={""}
              placeholder="toys Category"
            >
              <option value="police_car">Police Car</option>
              <option value="sports_car">Sport Car</option>
              <option value="track">Track</option>
              <option value="regular_car">Regular Car</option>
              <option value="fire_car">Fire Car</option>
            </select>
          </div>

          <div>
            <input
              {...register("quantity", { required: true })}
              placeholder="quantity"
              type="number"
            />
            <input
              {...register("price", { required: true })}
              placeholder="price"
              type="number"
            />
          </div>

          <div>
            <input {...register("toys_image")} placeholder="toys image" />
            <input
              {...register("rating", { required: true })}
              placeholder="rating"
              type="number"
            />
          </div>

          <div>
            <input
              {...register("email", { required: true })}
              placeholder="Seller Email"
              value={user?.email}
            />
            <input
              {...register("seller_name", { required: true })}
              value={user?.displayName}
              placeholder="Seller name"
              type="text"
            />
          </div>

          <div>
            <input {...register("description")} placeholder="description" />

            {/* <input className="button" value="Add toy" type="submit" /> */}
            <br />
            <button type="submit" className="button">
              submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Add_toys;
