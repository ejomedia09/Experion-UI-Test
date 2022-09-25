import React from 'react';
import Logo from './Images/logo.svg'
import GridIcon from './Images/grid.svg'
import InfoIcon from './Images/info.svg'
import TickIcon from './Images/tick.svg'
import UserIcon from './Images/user-icon.svg'
import './Navbar.css';
 
let menuHide = () =>{
  var menubtn = document.querySelector(".menubar");
  menubtn.classList.remove("extend");
  var menuoverlay = document.querySelector(".menu-overlay");
  menuoverlay.classList.remove("active");
}
const Navbar = () => {
    return <>
        <aside className="menubar">
            <div className='dash-logo'>
                <img src={Logo} className="App-logo" alt="logo" />
            </div>

        <ul className="menu-list">
          <li className="menu-item"><img src={UserIcon} alt="UserIcon" /> </li>
          <li className="menu-item active"><img src={GridIcon} alt="GridIcon" /> </li>
          <li className="menu-item"><img src={TickIcon} alt="TickIcon" /> </li>
          <li className="menu-item"><img src={InfoIcon} alt="InfoIcon" /> </li>
        </ul>
      </aside>
      <div className='menu-overlay' onClick={menuHide}></div>
    </>;
}

 

export default Navbar;