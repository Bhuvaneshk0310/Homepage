import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; // Import your CSS file

const Header = () => {
  const [navbarColor, setNavbarColor] = useState('#ff5858');
  const [fontColor, setFontColor] = useState('white');
  const [borderRadius, setBorderRadius] = useState('8px');
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleColorChange = (color) => {
    setNavbarColor(color);
  };

  const handleFontColorChange = (color) => {
    setFontColor(color);
  };

  const handleBorderRadiusChange = (radius) => {
    setBorderRadius(radius);
  };

  return (
    <div id="head">
      <div id="nav-colors">
        Navbar
        <button id="pink" className="btn" onClick={() => handleColorChange('#ff5858')}></button>
        <button id="red" className="btn" onClick={() => handleColorChange('#d31027')}></button>
        <button id="purple" className="btn" onClick={() => handleColorChange('#41295a')}></button>
        <button id="blue" className="btn" onClick={() => handleColorChange('#396afc')}></button>
        <button id="green" className="btn" onClick={() => handleColorChange('#add100')}></button>
        <button id="yellow" className="btn" onClick={() => handleColorChange('#f7971e')}></button>
        <button id="orange" className="btn" onClick={() => handleColorChange('#e43a15')}></button>
      </div>
      <div id="font-colors">
        Font
        <button id="white" className="btn" onClick={() => handleFontColorChange('white')}></button>
        <button id="black" className="btn" onClick={() => handleFontColorChange('black')}></button>
      </div>
      <div id="edges">
        Edges
        <button id="rounded" className="btn" onClick={() => handleBorderRadiusChange('8px')}>Rounded</button>
        <button id="square" className="btn" onClick={() => handleBorderRadiusChange('0')}>Square</button>
      </div>
      <h1>Minimal Bootstrap Navbar</h1>
      <nav className="navbar" style={{ background: `linear-gradient(to right, ${navbarColor}, ${navbarColor})`, borderRadius: borderRadius }}>
        <div className="container-fluid">
          {/* Nav Header */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><span className="fa fa-home"></span><span className="link"> Home</span></a>
          </div>
          {/* Nav Collapse */}
          <div className={`navbar-collapse collapse ${isOpen ? 'in' : ''}`}>
            {/* Nav Left */}
            <ul className="nav navbar-nav">
              {/* Products */}
              <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded={isDropdownOpen}>
                  <span className="fa fa-tags"></span><span className="link"> Products</span> <span className="fa fa-caret-down"></span>
                </a>
                <ul className="dropdown-menu" style={{ background: navbarColor }}>
                  <li><a href="#"><span className="fa fa-tag"></span> Catalogue 1</a></li>
                  <li><a href="#"><span className="fa fa-tag"></span> Catalogue 2</a></li>
                </ul>
              </li>
              {/* Services */}
              <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded={isDropdownOpen}>
                  <span className="fa fa-gears"></span><span className="link"> Services</span> <span className="fa fa-caret-down"></span>
                </a>
                <ul className="dropdown-menu" style={{ background: navbarColor }}>
                  <li><a href="#"><span className="fa fa-gear"></span> Service 1</a></li>
                  <li><a href="#"><span className="fa fa-gear"></span> Service 2</a></li>
                  <li><a href="#"><span className="fa fa-gear"></span> Service 3</a></li>
                </ul>
              </li>
              {/* About */}
              <li><a href="#"><span className="fa fa-info-circle"></span><span className="link"> About</span></a></li>
              {/* Contact */}
              <li><a href="#"><span className="fa fa-phone"></span><span className="link"> Contact</span></a></li>
            </ul>
            {/* Nav Right */}
            <form className="navbar-form navbar-right">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn"><span className="fa fa-search"></span></button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
