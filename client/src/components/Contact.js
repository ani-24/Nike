import React from "react";
import "./style/Contact.css";

function Contact() {
  return (
    <React.Fragment>
      <div class="Contact_container">
        <form>
          <h1 className="contact_us">Contact Us</h1>
          <input
            name="name"
            placeholder="What is your name?"
            class="name"
            required
          />
          <input
            name="emailaddress"
            placeholder="What is your email?"
            class="email"
            type="email"
            required
          />
          <textarea
            rows="4"
            cols="50"
            name="subject"
            placeholder="Please enter your message"
            class="message"
            required
          ></textarea>
          <input name="submit" class="btn" type="submit" value="Send" />
        </form>
      </div>
    </React.Fragment>
  );
}

export default Contact;
