import { Avatar } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import "./HeaderOptions.css";


function HeaderOptions({title, Icons, avatar}) {

  const [user] = useAuthState(auth);

  return (
    <div className='headerOptions'>
      {Icons && <Icons className="headerOptions-icons" />}
      {avatar && 
        <Avatar className="headerOptions-avatar" src={avatar} />
      }

      <h3 className='headerOptions-title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions