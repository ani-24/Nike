import React from "react";
import "./style/SignUp.css";
import Img from "../Img/SignUpImg.png";

function SignUp() {
  return (
    <React.Fragment>
      <div class="signUp_container">
        <div class="left_div">
          <h1 className="SignUp">SignUp</h1>
          <img className="SignUp_img" src={Img} />
        </div>
        <div className="SignUp_form_container">
          <form>
            <input name="name" placeholder="Name" class="name" required />
            <input
              name="emailaddress"
              placeholder="Email"
              class="email"
              type="email"
              required
            />
            <input
              name="emailaddress"
              placeholder="PassWord"
              class="password"
              type="password"
              required
            />
            <input
              name="emailaddress"
              placeholder="Repeat PassWord"
              class="password"
              type="password"
              required
            />
            <input name="submit" class="btn" type="submit" value="SignUp" />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
