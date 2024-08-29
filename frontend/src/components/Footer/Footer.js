
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Abstract</h4>
        <ul>
          <li>Branches</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Resources</h4>
        <ul>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Community</h4>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Dribbble</li>
          <li>Podcast</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Legal</li>
        </ul>
        <p>Contact Us</p>
        <p>info@abstract.com</p>
      </div>
    </footer>
  );
};

export default Footer;
