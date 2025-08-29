import './Footer.css'

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="column">
          <h2>Cedar-Wood Academy</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae odit officia vitae voluptatum culpa consequuntur. Dolorum velit saepe eos consectetur.</p>
          <p className="contactInfo">
            <span role="img" aria-label="email"><ion-icon name="mail-outline"></ion-icon></span><a href="mailto:cedarwoodacademymagboro@gmail.com">cedarwoodacademymagboro@gmail.com</a>
          </p>
          <p className="contactInfo">
            <span role="img" aria-label="phone"><ion-icon name="call-outline"></ion-icon></span> <a href="tel:+234 913 784 7640">+234 913 784 7640</a>

          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="column">
          <h2>Links</h2>
          <ul>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="column">
          <h2>Contact Us</h2>
          <ul>
            <li><h3>Address: </h3></li>
            <li>Plot 16, Road 6, Unity Estate, Magboro, Ogun State.</li>
            <li><h3>Phone Numbers</h3></li>
            <li><a href="tel:+234 8037127372">+234 803 712 7372</a></li>
            <li><a href="tel:+234 8033632311">+234 803 363 2311</a></li>
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div className="column">
          <h2>Follow Us</h2>
          <p>Stay updated with our latest projects and insights.</p>
          <div className="socialLinks">
            <a href="https://www.facebook.com/share/15ym2TV5AA/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="https://x.com/acedigitalco?s=21 " target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="https://www.instagram.com/acedigitalco_?igsh=amlreGExOTFrOWQ1 " target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/company/ace-digital-co/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="footerBottom">
        <p>&copy; 2025 Cedar-Wood Academy. All rights reserved.</p>
        <div className="legalLinks">
          <Link to="/"> Policy</Link>
          <Link to="/">Terms of service</Link>
          <a href="#cookie">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;