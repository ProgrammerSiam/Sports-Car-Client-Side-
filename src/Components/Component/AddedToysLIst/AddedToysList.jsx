import React from 'react';
import {  FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import  '../style/addtoy.css'

const AddedToysList = ({ toy, index, deleteItems }) => {
    const {
        description,
        email,
        price,
        quantity,
        rating,
        seller_name,
        sub_category,
        toys_image,
        toys_name ,
        _id
     } = toy

    return (
      <section className="add--toy--list">
        <div>
          <img src={toys_image} alt="toys" />
        </div>

        <h3 className="font-bold">{toys_name}</h3>

        <h3 className="font-bold">{sub_category}</h3>

        <h3 className="font-bold">{quantity}</h3>

        <h3 className="font-bold">{email}</h3>
        
        <Link className='button' to={`/toysDetails/${_id}`}>details</Link>

        <div className="toy--list--btn">
          <button className="button" onClick={() => deleteItems(_id)}>
            <FaTrash />
          </button>
          <button className="button">
            <Link to={`/updateData/${_id}`}>
              <FaPen />
            </Link>
          </button>
        </div>
      </section>
    );
};

export default AddedToysList;