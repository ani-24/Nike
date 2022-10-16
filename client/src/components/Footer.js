import React from "react";
import "./style/Footer.css";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  return (
    <React.Fragment>
      <footer>
        <h1 className="footer_H1"> Shoes Shop </h1>
        <p className="footer_para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <hr />
        <div className="social_container">
          <span className="socials">
            <BsFacebook />
          </span>
          <span className="socials">
            <FaInstagram />
          </span>
          <span className="socials">
            <AiFillTwitterCircle />
          </span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
