// Header.js
import React from 'react';
import logo from './project-images/logo.png';
import { AiOutlineSearch, AiOutlineDown, AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ hearts }) => {
  return (
    <div className="header-top">
      <div className="head-container">
        <div className="left-head">
          <Link to="/">
            <img src={logo} className="image-logo" alt="logo" />
          </Link>
        </div>
        <div className="center-head">
          <div className="search-bar">
            <button type="button" className='btn-input'>
              <input type="text" placeholder="Search for product" className='search-input' />
              <div className="icon-search">
                <AiOutlineSearch />
              </div>
            </button>
          </div>
        </div>
        <div className="right-head">
          <div className="dropdown">
            <button className="dropdown-button">
              English <AiOutlineDown />
            </button>
            <div className="dropdown-content-head">
              <a href="#">English</a>
              <a href="#">French</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">
              USD <AiOutlineDown />
            </button>
            <div className="dropdown-content-head">
              <a href="#">USD</a>
              <a href="#">EURO</a>
            </div>
          </div>
          <div className="icon-container">
            <Link to="/HomeMedicalSupplies"><AiOutlineUser className="icon" /></Link>
            <AiOutlineHeart className={`icon ${hearts.includes(true) ? 'active' : ''}`} />
            <AiOutlineShoppingCart className="icon" />
          </div>
        </div>
      </div>
      <hr className="horizontal-line" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  hearts: state.hearts,
});

export default connect(mapStateToProps)(Header);
