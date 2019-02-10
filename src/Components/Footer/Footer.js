import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/work/">Work</Link>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link>
    </div>
    <div>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook Icon</a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter Icon</a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">Linkedin Icon</a>
    </div>
    <span>(214) 774-4262</span>
    <div>
      <Link to="/privacy-policy/">Privacy Policy</Link>
      <span>| Copyright 2017</span>
    </div>
  </div>
)

export default Footer