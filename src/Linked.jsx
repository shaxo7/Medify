import React from 'react';
import image1 from './project-images/bg-banner1.jpg';
import image2 from './project-images/bg-banner2.jpg';
import image3 from './project-images/bg-banner3.jpg';
import { Link } from 'react-router-dom';


const ImageRow = () => {
  return (
    <div className="image-row">
      <div className="image-container">
        <img src={image1} alt="shop 1" />
        <p className='text-1'>Vaprorizer ChargerX200 5KW</p>
        <Link to="/pages"><button className='btn-shop-1'>More</button></Link>
      </div>
      <div className="image-container">
        <img src={image2} alt="shop 2" />
        <p className='text-2'>Digital Thermometer X30-Pro</p>
        <Link to="/shop"><button className='btn-shop-2'>Shop now</button></Link>
      </div>
      <div className="image-container">
        <img src={image3} alt="shop 3" />
        <p className='text-3'>SuperBrush X200 Higenic</p>
        <Link to="/shop"><button className='btn-shop-3'>Shop now</button></Link>
        <br />
        <br />
        <br />
      </div>
      
    </div>
  );
};

export default ImageRow;
