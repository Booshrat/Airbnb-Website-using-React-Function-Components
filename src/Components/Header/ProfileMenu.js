import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import './styles.css';

// Create a function component.
function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div 
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='profile-menu'
        >
        <MenuRoundedIcon />
        <AccountCircleRoundedIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{'.MuiPaper-root': {
            borderRadius: "1rem",
            marginTop: "1rem", 
            minWidth: "250px",
            boxShadow: "0 1px 2px rgb(0 0 0 / 8%), 0 2px 12px rgb(0 0 0 / 5%)"}}}
      >
        <MenuItem className='menu-item' onClick={handleClose} sx={{fontWeight: "500"}} >Sign up</MenuItem>
        <MenuItem className='menu-item' onClick={handleClose}>Log int</MenuItem>
        <div style={{ height: "1px", backgroundColor: "var(--grey)", width: "100px" }}></div>
        <MenuItem className='menu-item' onClick={handleClose}>Airbnb your home</MenuItem>
        <MenuItem className='menu-item' onClick={handleClose}>Host an experience</MenuItem>
        <MenuItem className='menu-item' onClick={handleClose}>Help</MenuItem>
      </Menu>
    </div>
  );
}

// Export the ProfileMenu component.
export default ProfileMenu;