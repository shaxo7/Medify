import React from 'react';

const images = [
  { src: require('./project-images/p-1.jpg'), text: 'Product 1', Stars: '★★★', Rate: '$ 100.00' },
  { src: require('./project-images/p-2.jpg'), text: 'Product 2', Stars: '★★★', Rate: '$ 100.00' },
  { src: require('./project-images/p-3.jpg'), text: 'Product 3', Stars: '★★★', Rate: '$ 100.00' },
  { src: require('./project-images/p-4.jpg'), text: 'Product 4', Stars: '★★★', Rate: '$ 100.00' },
  { src: require('./project-images/p-5.jpg'), text: 'Product 5', Stars: '★★★', Rate: '$ 100.00' },
  { src: require('./project-images/p-6.jpg'), text: 'Product 6', Stars: '★★★', Rate: '$ 100.00' },
  { src: require('./project-images/p-7.jpg'), text: 'Product 7', Stars: '★★★', Rate: '$ 100.00' },
  { src: require('./project-images/p-8.jpg'), text: 'Product 8', Stars: '★★★', Rate: '$ 100.00' },
  { src: require('./project-images/p-9.jpg'), text: 'Product 9', Stars: '★★★', Rate: '$ 100.00' },
  { src: require('./project-images/p-10.jpg'), text: 'Product 10', Stars: '★★★', Rate: '$ 100.00'},
];

function SliderImage() {
  return (
    <div className="Slider-3">
      <h1 className='product-heading'>Future Products</h1>
      <div className="image-container-3">
        {images.map((item, index) => (
          <div key={index} className="image-item">
            <img src={item.src} alt={`Imag ${index + 1}`} />
            <p className='sort-shop'>{item.text}</p>
            <p className='sort-stars'>{item.Stars}</p>
            <p className='sort-rate'>{item.Rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderImage;
