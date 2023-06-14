import React from 'react';
import CTA from './CTA';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Maged Bebawy</h1>
        <h3>909-389-8092</h3>
        <h5 className="text-light">Full-stack Engineer</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
