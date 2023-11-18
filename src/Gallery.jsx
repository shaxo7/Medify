import React from 'react';
import { Link } from 'react-router-dom';


const images = [
  {
    src: require('./project-images/facemask-cat.png'),
    text: 'Face Mask',
  },
  {
    src: require('./project-images/uniforms-cat.png'),
    text: 'Uniforms',
  },
  {
    src: require('./project-images/protectcover-cat.png'),
    text: 'Protective Covers',
  },
  {
    src: require('./project-images/dental-cat.png'),
    text: 'Dental',
  },
  {
    src: require('./project-images/pressure-cat.png'),
    text: 'Blood Pressure',
  },
];

const ImageGallery = () => {
  return (
    
    <div className="image-gallery">
      
      {images.map((image, index) => (
        
        <div key={index} className="image-card">
          <img src={image.src} alt={image.text} className='gallery-image'/>
          <div className="image-text">{image.text}</div>
          <Link to="/shop"><button className="image-button">More</button></Link>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
