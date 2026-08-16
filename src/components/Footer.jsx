import { Link } from "react-router-dom";
import FaceBook from '../assets/facebook.png';
import InstaGram from '../assets/instagram.png';
import TiktokPage from '../assets/tiktok.png';
import LocationIcon from '../assets/location.png';
import EmailIcon from '../assets/mail.png';
import PhoneIcon from '../assets/phone.png';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h3>HG Energy and Network Solution</h3>
          <p>Reliable solar energy solutions that help homes and businesses enjoy clean, affordable, and dependable power every day.</p>
          <div className="address">
            <img src={EmailIcon} alt="An Email Icon" width="30px" />
            <a href="mailto:solaredgeng247@gmail.com" className="add-email">solaredgeng247@gmail.com</a>
          </div>
          <div className="address">
            <img src={PhoneIcon} alt="A Phone Icon" width="30px" />
            <p className="add-phone">09032559771</p>
          </div>
          <div className="address">
            <img src={LocationIcon} alt="A location Icon" width="30px" />
            <p className="add-location">Plot 1804, Kuchiako District, Kuje, Abuja</p>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/products">Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h4>Our Services</h4>
          <p className="services-p">Residential Solar</p>
          <p className="services-p">Commercial Solar</p>
          <p className="services-p">Solar Consulting</p>
          <p className="services-p">Maintenance</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} HG Energy and Network Solution. All rights reserved.

        <div className="social-media">
          <a href="https://www.facebook.com/share/19aAjNBAQ1/?mibextid=wwXIfr" className="social-media-links"><img src={FaceBook} alt=""/></a>
          <a href="https://www.tiktok.com/@solaregde?_r=1&_t=ZS-98uYhC62B1E" className="social-media-links"><img src={TiktokPage} alt="" /></a>
          <a href="https://www.instagram.com/solar__edge?igsh=MWFza2lxaGdwM3Q2dw%3D%3D&utm_source=qr" className="social-media-links"><img src={InstaGram} alt="" /></a>
        </div>
      </div>
    </footer>
  );
}

function whatsappLink(message = "Hello HG Energy, I would like to make an enquiry.") {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || "2348000000000";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}