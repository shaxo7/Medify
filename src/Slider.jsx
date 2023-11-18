import React, { useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { connect } from 'react-redux';
import { toggleHeart } from './actions';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './project-images/slider1.jpg';
import image2 from './project-images/slider2.jpg';
import image3 from './project-images/slider3.jpg';
import image4 from './project-images/slider4.jpg';
import image5 from './project-images/slider5.jpg';
import image6 from './project-images/slider6.jpg';
import BoxContainer from './Case-btn';

const CustomPrevArrow = (props) => (
  <div {...props} className="custom-arrow custom-prev" onClick={props.onClick}>
    &larr;
  </div>
);

const CustomNextArrow = (props) => (
  <div {...props} className="custom-arrow custom-next" onClick={props.onClick}>
    &rarr;
  </div>
);

const SimpleSlider = ({ dispatch, hearts }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      text: 'Hip belt',
      para: '$ 400.00',
      stars: '★★★',
    },
    {
      src: image2,
      alt: 'Image 2',
      text: 'Soft pillow',
      para: '$ 500.00',
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
      text: 'Med Wire Tape',
      para: '$ 100.00',
      stars: '★★★★★',
    },
    {
      src: image6,
      alt: 'Image 6',
      text: 'Patient Bed',
      para: '$ 1000.00',
      stars: '★★',
    },
  ];

  return (
    <div className="simple-slider">
      <h2 className="product-heading">Latest Products</h2>
      <Slider {...settings}>
        {imagesWithTextAndButtons.map((image, index) => (
          <div
            key={index}
            className="slide"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link to="/shop">
              <img src={image.src} alt={image.alt} className="image" />
            </Link>
            <Link to="/shop" className="caption">
              {image.text}
            </Link>
            <p className="Rate">{image.para}</p>
            <p className="stars">{image.stars}</p>
            {hoveredIndex === index && (
              <div className="icons-container">
                <AiOutlineHeart
                  className={`heart-icon ${hearts[index] ? 'active' : ''}`}
                  onClick={() => dispatch(toggleHeart(index))}
                />
                <AiOutlineShoppingCart className="cart-icon" />
              </div>
            )}
          </div>
        ))}
      </Slider>
      <BoxContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  hearts: state.hearts,
});

export default connect(mapStateToProps)(SimpleSlider);