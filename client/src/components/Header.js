import React from "react";
import "./style/Header.css";
import Img from "../Img/HeaderImg.png";

function Header() {
  return (
    <React.Fragment>
      <div className="Header_container">
        <div className="Img_Container">
          <img className="Header_img" src={Img} />
        </div>
        <div className="Header_text">
          <p className="top_para">OUR NEWEST MEMBER</p>
          <h1>NIKECOURT ZOOM VAPOR CAGE 4 RAFA</h1>
          <p className="bottom_para">Men's Hard Count Tennis Shoes</p>
          <button className="Header_Btn">VIEW PRODUCT</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
