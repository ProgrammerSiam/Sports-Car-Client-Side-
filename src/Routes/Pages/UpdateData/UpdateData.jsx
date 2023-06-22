import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../style/updatedata.css";
const UpdateData = () => {
  const toysData = useLoaderData();
  const navigate = useNavigate();
  console.log(toysData);
  const {
    description,
    email,
    price,
    quantity,
    rating,
    seller_name,
    sub_category,
    toys_image,
    toys_name,
    _id,
  } = toysData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch(
      `https://server-side-qthr3ewfi-mehediinfo10101-gmailcom.vercel.app/updateJob/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.modifiedCount);
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "Update this Coffee", "success");
          navigate("/mytoys");
        }
      });
  };                      

  return (
    <section className="update--data">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register("toys_name", { required: true })}
            placeholder="toy name"
            defaultValue={toys_name}
          />
          <input
            {...register("sub_category", { required: true })}
            placeholder="sub category"
            defaultValue={sub_category}
          />
        </div>
        <div>
          <input
            {...register("quantity", { required: true })}
            placeholder="quantity"
            defaultValue={quantity}
            type="number"
          />
          <input
            {...register("price", { required: true })}
            placeholder="price"
            defaultValue={price}
            type="number"
          />
        </div>

        <div>
          <input
            {...register("toys_image")}
            placeholder="toys image"
            defaultValue={toys_image}
          />
          <input
            {...register("rating", { required: true })}
            placeholder="rating"
            defaultValue={rating}
            type="number"
          />
        </div>

        <div>
          <input
            {...register("description")}
            placeholder="description"
            defaultValue={description}
          />
          {/* <input value="Update Toys Details" type="submit" /> */}
          <br />
          <button type="submit" className="button">
            Update Toys Details
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateData;
