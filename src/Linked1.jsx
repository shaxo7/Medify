import React from "react";
import Zoom1 from './project-images/bg-banner4.jpg'; 
import Zoom2 from './project-images/bg-banner5.jpg';
import { Link } from "react-router-dom";

function ImageZoom() {
  return (
    <div className="Img-zoom">
      <div className="Left-zoom">
        <img src={Zoom1} alt="zoom1" className="Imgzoom1" />
        <div className="ImageText-1-1">New</div>
        <div className="ImageText-1">Get rid of bacteria in your home</div>
        <Link to="/pages"><button className="Zoom-Btn1">More</button></Link>
      </div>
      <div className="right-zoom">
        <img src={Zoom2} alt="zoom2" className="Imgzoom2" />
        <div className="ImageText-1-2">-10%</div>
        <div className="ImageText-2">Candid Whitening Kit</div>
        <Link to="/shop"><button className="Zoom-Btn2">Shop Now</button></Link>
      </div>
    </div>
  );
}
export default ImageZoom;
