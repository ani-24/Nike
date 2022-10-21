import React from "react";
import "./style/Card.css";
import Img from "../Img/HeaderImg.png";
import { FaShoppingCart } from "react-icons/fa";

import { encode } from "base64-arraybuffer";

function Card({ name, desc, price, color, img }) {
  return (
    <React.Fragment>
      <div className="product-card">
        <div className="product-tumb">
          <img
            src={`data:image/image/png;base64,${img.data.toString("base64")}`}
          />
        </div>
        <div className="description">
          <p className="Product_Name">{name}</p>
          <hr />
          <p className="price">
            {price} <span>{<FaShoppingCart />}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
