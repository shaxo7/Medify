import React, { useState, useEffect } from 'react';
import ImageRow from './Linked';
import ImageGallery from './Gallery';
import Smallhead1 from './Head1';
import LinkGrid from './Verify';
import MultiImageCarousel from './Slider';
import CountdownTimer from './Timer';
import SimpleSlider2 from './Slider2';

import { Link } from 'react-router-dom';
import SliderImage from './Slider3';
import PhotoGallery from './Instagram';
import EmailGrid from './Footer1';
import TextComponent from './TextLink';
import Footer from './Footer2';
import Copyright from './Footer3';




const images = [
  {
    src: require('./project-images/christina-victoria-craft-ZHys6xN7sUE-unsplash.jpg'),
    text: 'Dont Miss It',
  },
  {
    src: require('./project-images/katie-harp-qmB-5TJ8IiM-unsplash.jpg'),
    text: 'Get Rid All Of It',
  },
  {
    src: require('./project-images/towfiqu-barbhuiya-w8p9cQDLX7I-unsplash.jpg'),
    text: 'Buy Now And Enjoy',
  },
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };
  
  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
    <div className="carousel-container">
      <button className="carousel-button left" onClick={goToPreviousImage}>&larr;</button>
      <div className="carousel-image-container">
        <img className="carousel-image" src={images[currentImage].src} alt={images[currentImage].text} />
        <Link to="/shop"><button className="carousel-image-button">Shop now</button></Link>
        <p className="carousel-image-text">{images[currentImage].text}</p>
      </div>
      <button className="carousel-button right" onClick={goToNextImage}>&rarr;</button>
    </div>
    <ImageRow />
    <Smallhead1 />
    <br />
    <ImageGallery />
    <LinkGrid />
    <MultiImageCarousel />
    <CountdownTimer />
    <SimpleSlider2 />
    <SliderImage />
    <PhotoGallery />
    <EmailGrid />
    <TextComponent />
    <Footer />
    <Copyright />
    </div>
  );
};

export default Carousel;
