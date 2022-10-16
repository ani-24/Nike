import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import "./style/Nav.css";

function Nav() {
  const [toggle, setToggle] = useState(true);
  const ToggleHandler = () => setToggle(!toggle);
  const closeMobileMenu = () => setToggle(true);

  if (toggle === false) {
    document.body.style.overflowX = "none";
  }

  return (
    <nav className="navBar">
      <h1 className="logo">Shoes Shop</h1>
      <span className="toggle_menu" onClick={ToggleHandler}>
        {toggle ? <GoThreeBars /> : <MdOutlineClose />}
      </span>
      <ul className={toggle ? "navUl" : "showNav"}>
        <Link className="navLinks links" onClick={closeMobileMenu} to={"/"}>
          <li>Home</li>
        </Link>
        <Link
          className="navLinks links"
          onClick={closeMobileMenu}
          to={"/about"}
        >
          <li>About</li>
        </Link>
        <Link
          className="navLinks links"
          onClick={closeMobileMenu}
          to={"/contact"}
        >
          <li>Contact</li>
        </Link>
        <Link
          className="navLinks signUp"
          onClick={closeMobileMenu}
          to={"/signUp"}
        >
          <li>signUp</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
