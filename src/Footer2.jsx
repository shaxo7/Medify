import React from 'react';
import logo from './project-images/logo.png';
import {AiFillPhone, AiFillMail, AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillLinkedin} from 'react-icons/ai';
import {BsPinterest} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="first-1">
        <div className="f-1-1">
        <img src={logo} className="image-logo-footer" alt="logo" />
        </div>
        <div className="f-1-2">1487 Rocky Horse Carrefour Arlington, TX 16819<br /><u>Show on map</u></div>
        <div className='f-1-3'><AiFillFacebook className='fb'/>   <AiFillInstagram className='ig' />    <AiFillYoutube className='yt' />   <BsPinterest  className='pt'/>   <AiFillLinkedin className='li' />  </div>
      </div>
      
      <div className="second-2">
        <div className="s-2-1">Need help</div>
        <div className="s-2-2"><AiFillPhone className='ph'/>  0020 500 – MYMEDI – 000</div>
        <div className="s-2-3">Monday – Friday: 9:00-20:00 Saturday: 11:00 – 15:00</div>
       <a href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttgFGDNBhnmXVLFDpDlcpmSBbVsSSXpjpDGJlRPJlLnzvCLcMwSjRzbsqSwlDWCBbFjDQ'> <div className="s-2-4"><AiFillMail className='ml' />  contact@example.com</div></a>
      </div>
      <div class="third-3">
  <div class="t-3-1">
    <ul>
      <li class="list-item-head">Information</li>
      <li class="list-item">About us</li>
      <li class="list-item">Delivery Information</li>
      <li class="list-item">Privacy Policy</li>
      <li class="list-item">Sales</li>
      <li class="list-item">Terms & Conditions</li>
    </ul>
  </div>
  <div class="t-3-2">
    <ul>
      <li class="list-item-head">Account</li>
      <li class="list-item">My account</li>
      <li class="list-item">My Order</li>
      <li class="list-item">Return</li>
      <li class="list-item">Shipping</li>
      <li class="list-item">Wishlist</li>
    </ul>
  </div>
  <div class="t-3-3">
    <ul>
      <li class="list-item-head">Store</li>
      <li class="list-item">Affiliate</li>
      <li class="list-item">Bestsellers</li>
      <li class="list-item">Discount</li>
      <li class="list-item">Latest Products</li>
      <li class="list-item">sale</li>
    </ul>
  </div>
</div>

    </div>
  );
};

export default Footer;
