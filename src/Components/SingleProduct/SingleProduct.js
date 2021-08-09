import React from "react";

const SingleProduct = ({ item, handleCheck }) => {
  return (
    <li key={item.id}>
      <div className="inputGroup">
        <label className="inputLabel ">
          <img src={item.image} alt="" className="item-icon" />
          {item.title}
        </label>
        <input
          className="inputField"
          type="checkbox"
          value={item.id}
          onChange={handleCheck}
          id={item.id}
        />
      </div>
    </li>
  );
};

export default SingleProduct;
