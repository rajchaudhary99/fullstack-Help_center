
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>How can we help?</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button type="submit">→</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
