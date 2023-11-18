import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';

const PhotoGallery = () => {
  const images = [
    require('./project-images/i-1.jpg'),
    require('./project-images/i-2.jpg'),
    require('./project-images/i-3.jpg'),
    require('./project-images/i-4.jpg'),
    require('./project-images/i-5.jpg'),
    require('./project-images/i-6.jpg'),
  ];

  return (
    <div>
        <p className='Gallery-text'>Follow <b>@MYMEDI</b> on instagram</p>
    <div className="photo-gallery-2">
       
      {images.map((image, index) => (
        <div key={index} className="image-wrapper-2">
          <img src={image} alt={`Ima ${index + 1}`} className="image-2" />
          <div className="overlay-2">
            <a href='https://www.instagram.com/mymedi2020/'><span className="instagram-icon-2"><AiFillInstagram /></span></a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PhotoGallery;
