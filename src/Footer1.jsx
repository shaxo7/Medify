// EmailGrid.jsx

import React from "react";
import Email from "./project-images/email.jpg";
import { Link } from "react-router-dom";


function EmailGrid() {
  return (
    <div className="Email-container">
      <div className="ep-1">
        <img src={Email} alt="Email" />
      </div>
      <div className="ep-2">
        <h1 className="email-text">Join our newsletter and get $20 discount for your first order</h1>
        <input type="text" placeholder="Enter Your Email" className="Email-input" />
       <Link to="/Error404"><button className="btn-email">Subscribe</button></Link>
      </div>
      <div className="ep-3">
        <img src={Email} alt="Email" />
      </div>
    </div>
  );
}

export default EmailGrid;
