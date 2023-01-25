import React from 'react';
import "./Header.css";
import HeaderOptions from "./HeaderOptions.js";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function Header() {
  
  const [user] = useAuthState(auth);

  return (
    <div className='header'>
      <div className='header-left'>
        <img src='https://img.freepik.com/free-icon/linkedin_318-183415.jpg?w=2000' alt='logo' />
      <div className='header-search'>
        <SearchIcon />
        <input type="text" placeholder='Search' />
      </div>
      </div>

      <div className='header-right'>
        <HeaderOptions title="Home" Icons={HomeIcon} />
        <HeaderOptions title="My Network" Icons={SupervisorAccountIcon} />
        <HeaderOptions title="Jobs" Icons={BusinessCenterIcon} />
        <HeaderOptions title="Messaging" Icons={ChatIcon} />
        <HeaderOptions title="Notifications" Icons={NotificationsIcon} />
        <HeaderOptions avatar={user?.photoURL} title="me" />
 
      </div>

      </div>

  )
}

export default Header