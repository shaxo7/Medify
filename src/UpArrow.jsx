import React from 'react';


const UpArrowButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="up-arrow-button" onClick={scrollToTop}>
      &#8595;
    </button>
  );
};

export default UpArrowButton;
