import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css'; // Import the main slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import the theme CSS
import image1 from './project-images/slider7.jpg';
import image2 from './project-images/slider8.jpg';
import image3 from './project-images/slider9.jpg';
import image4 from './project-images/slider4.jpg';
import image5 from './project-images/slider10.jpg';
import image6 from './project-images/slider11.jpg';
import ImageZoom from './Linked1';





// Custom left arrow component
const CustomPrevArrow = (props) => (
  <div
    {...props}
    className="custom-arrow custom-prev"
    onClick={props.onClick}
  >
    &larr;
  </div>
);

// Custom right arrow component
const CustomNextArrow = (props) => (
  <div
    {...props}
    className="custom-arrow custom-next"
    onClick={props.onClick}
  >
    &rarr;
  </div>
);

const SimpleSlider2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const imagesWithTextAndButtons = [
    {
      src: image1,
      alt: 'Image 1',
      text: 'Pillow Cover',
      para: '$ 400.00',
      stars: '★★★',
    },
    {
      src: image2,
      alt: 'Image 2',
      text: 'Med Needle',
      para: '$ 50.00',
      stars: '★★★★★',
    },
    {
      src: image3,
      alt: 'Image 3',
      text: 'Med Scroller',
      para: '$ 250.00',
      stars: '★★★★',
    },
    {
      src: image4,
      alt: 'Image 4',
      text: 'Med Bed Sheet',
      para: '$ 300.00',
      stars: '★★',
    },
    {
      src: image5,
      alt: 'Image 5',
      text: 'Med Screw',
      para: '$ 200.00',
      stars: '★★★★★',
    },
    {
      src: image6,
      alt: 'Image 6',
      text: 'Sponge',
      para: '$ 100.00',
      stars: '★★',
    },
  ];

  return (
    <div className="simple-slider-2">
      <h2 className='product-heading'>Top-Sellers-In-Sale</h2>
      <Slider {...settings}>
        {imagesWithTextAndButtons.map((image, index) => (
          <div key={index} className="slide">
            <Link to="/shop"><img src={image.src} alt={image.alt} className="image" /></Link>
            <Link to="/shop" className="caption">
              {image.text}
            </Link>
            <p className='Rate' >{image.para}</p>
            <p className='stars'>{image.stars}</p>
           
          </div>
        ))}
      </Slider>
      <ImageZoom />
    </div>
  );
};


export default SimpleSlider2;
