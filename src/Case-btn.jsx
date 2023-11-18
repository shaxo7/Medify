import React from "react";
import { MdOutlineVerifiedUser }from "react-icons/md";
import gift from './project-images/gift-1.png';
import { Link } from "react-router-dom";

function BoxContainer(){
    return(
        <div className="Box-Container">
            <div className="Box-text">
                <p className="Box-Text-1"><b className="bold"><MdOutlineVerifiedUser />100% Secure delivery</b> without contacting the courier</p>
            </div>
            <div className="Box-image">
                <img src={gift} alt="gift-op" className="img-gift" />
            </div>
            <div className="Box-Button">
            <Link to="/Homepages"> <button className="btn-Box">More</button></Link>
            </div>
            
        </div>
    );
}
export default BoxContainer;