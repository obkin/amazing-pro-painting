import React from "react";
import livingRoom from '../images/living-room.png';
import logo from '../images/logo.png';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
          <div className="sidebar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="socials">
              <a href="#" className="social-icon">F</a>
              <a href="#" className="social-icon">I</a>
            </div>
            <div className="email">info@amazingpropainting.com</div>
      </div>

      {/* Головний контент */}
      <div className="main-content">
        {/* Верхнє меню */}
        <header className="header">
          <nav className="nav">
            <a href="#">About us</a>
            <a href="#">Projects</a>
            <a href="#">Materials</a>
            <a href="#">Contacts</a>
          </nav>
          <div className="contact">📞 732-421-3080</div>
        </header>

        {/* Основна секція */}
        <div className="hero">
          <div className="hero-text">
            <h1 className="title">Amazing Pro Painting</h1>
            <p className="subtitle">
              Interior & Exterior Painting, Wood Staining, Epoxy Flooring, Cabinet Refinishing, Wallpaper Removal, Deck & Fence Painting/Staining, Drywall Repair & Texturing, Power Washing
            </p>
            <div>
              <button className="learn-more">Learn More →</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={livingRoom} alt="Living Room" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;