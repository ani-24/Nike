import React from "react";
import "./style/Card.css";
import Img from "../Img/HeaderImg.png";
import { FaShoppingCart } from "react-icons/fa";

function Card({ name, desc, price, color, img }) {
  return (
    <React.Fragment>
      <div class="product-card">
        <div class="product-tumb">
          <img src={img} />
        </div>
        <div className="description">
          <p class="Product_Name">{name}</p>
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
