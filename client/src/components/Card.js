import React from "react";
import "./style/Card.css";
import Img from "../Img/HeaderImg.png";
import { FaShoppingCart } from "react-icons/fa";

function Card() {
  return (
    <React.Fragment>
      <div class="product-card">
        <div class="product-tumb">
          <img src={Img} />
        </div>
        <div className="description">
          <p class="Product_Name">Name Product</p>
          <hr />
          <p className="price">
            300% <span>{<FaShoppingCart />}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
