import React from "react";
import error from './project-images/Error404.jpg';

import Footer from "./Footer2";
import Copyright from "./Footer3";
import TextComponent from "./TextLink";



 function Error(){
    return(
        <div>
        <div className="Error-container">
            <div className="error-left">
                <div className="e-404">404</div>
                <div className="error-text">This page has been probably moved somewhere...</div>
                <div className="error-text-2">Please back to homepage or check our offer</div>
                <div className="error-btn">Back To Homepage</div>
            </div>
            <div className="error-right">
                <img src={error} alt="error" className="error-image" />
            </div>
            
        </div>
        <TextComponent />
        <Footer />
        <Copyright />
        </div>
    );
 }
 export default Error;