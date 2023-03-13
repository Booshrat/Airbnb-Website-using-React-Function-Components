import React from 'react'
import logo from './images/logo.png';
import './styles.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ProfileMenu from './ProfileMenu';

// Create a function component.
function Header() {
  return (
    <div className='navbar'>
        <img src={logo} alt='logo' className='nav-logo'/>
        <div className='search'>
            <div className='search-text'>Anywhere</div>
            <div className='search-text'>Any week</div>
            <div className='search-text-guest'>Add guests</div>
            <div className='search-icon'><SearchRoundedIcon /></div>       
        </div>
        <div className='profile'>
            <div className='airbnb-your-home'>Airbnb your home</div>
            <div className='airbnb-your-home'><LanguageRoundedIcon sx={{fontSize: "1.3rem"}} /></div>
            <div className=''><ProfileMenu /></div>
        </div>
    </div>
  );
}

// Export the Header component.
export default Header;