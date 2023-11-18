import React from 'react';
import { AiFillWallet, AiFillShop } from 'react-icons/ai';
import {BsTruck} from 'react-icons/bs';


const TextComponent = () => {
  return (
    <div className="text-container">
      <div className="tl-1">
        <p><AiFillWallet /> 100% Money back</p>
      </div>
      <div className="tl-2">
        <p><AiFillShop />Non-contact shipping</p>
      </div>
      <div className="tl-3">
        <p><BsTruck />Free delivery for order over $200</p>
      </div>
    </div>
  );
};

export default TextComponent;
