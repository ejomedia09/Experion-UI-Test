import React from 'react';
import LogoBlue from './Images/logoblue.svg'
import Favorite from './Images/favorits.svg';
import Cart from './Images/cart.svg';
import User from './Images/user.png';
import './Header.css';
 
let showMenu =()=>{
    var menubtn = document.querySelector(".menubar");
    var menuoverlay = document.querySelector(".menu-overlay");
    menubtn.classList.add("extend");
    menuoverlay.classList.add("active");
}
const Header = () => {
    return <>
        <header className="header">
        <img src={LogoBlue} alt='Logo' onClick={showMenu} className='user-welcome logo-sm'></img> {/* Logo for small devices */ }
            <h1 className='user-welcome hide-sm'>
                Hi John!
            </h1>
            <div className="header-search">
                <form><input type="text" name="search" placeholder='Search for products, brands and more' /></form>
            </div>
            <div className="cart">
                <img src={Favorite} alt='Favorite Items'></img>
                <img src={Cart} alt='Cart'></img>
            </div>
            <div className="user">
            <div className="dropdown">
                <button className="dropbtn"><img src={User} alt='John Paul'></img><span>John Paul</span></button>
                    <div className="dropdown-content"><span>Log Out</span></div>
                </div>
            </div>
      </header>
    </>;
}

 

export default Header;