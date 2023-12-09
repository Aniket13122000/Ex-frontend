import React from 'react';
import './Home.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-content">
      <div className="footer-column">
          <h4>Digital agency</h4>
          <ul>
          <p className="" style={{width:"250px"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
        aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in
        volutpat ullamcorper amet adipiscing fermentum.
      </p>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Digital agency</h4>
          <ul>
            <li>Company</li>
            <li>Help</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Customer Support</h4>
          <ul>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Free eBooks</li>
            <li>How to - Blog</li>
          </ul>
        </div>
       
      </div>
      
    </footer>
  );
};

export default Footer;
