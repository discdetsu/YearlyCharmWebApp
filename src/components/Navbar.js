import React, { useState } from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };
    // const toggleMenu = document.querySelector('.toggle');
    // const navigation = document.querySelector('.navigation');
    // toggleMenu.onclick = () => {
    //   toggleMenu.classList.toggle('active');
    //   navigation.classList.toggle('active');
    // }

    return (
        <header id="header">
        <a href="/#"><img className='logo' src={logo} alt="logo"/></a>
        <div className={isActive ? 'toggle active': 'toggle'} onClick={toggleClass}></div>
        <ul className={isActive ? 'navigation active': 'navigation'}>
          <li><a href="/#" className="active">Home</a></li>
          <li><a href="/#" className="about">About</a></li>
          <li><a href="/#">Work</a></li>
          <li><a href="https://web.facebook.com/YearlyCharm">Contact</a></li>
        </ul>
      </header>
    )
}

export default Navbar;