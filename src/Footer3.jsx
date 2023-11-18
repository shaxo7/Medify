import React from "react";
import Pay from './project-images/Pay.jpg';

function Copyright(){
    return(
        <div className="cp-f">
            <div className="copy-l">
            Copyright © 2021 Mymedi. All Rights Reserved
            </div>
            <div className="copy-r">
                <img src={Pay} alt="payalt" className="pay-img" />
            </div>
        </div>
    );
}
export default Copyright;