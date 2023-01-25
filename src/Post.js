import { Avatar } from '@mui/material';
import React from 'react';
import InputOptions from './InputOptions';
import "./Post.css";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function Post({name, description,message ,timeStamp,photoURL}) {

  const [user] = useAuthState(auth);

  return (
    <div className='post'>
      <div className='post-header'>
        <Avatar src={photoURL}/>

        <div className='post-info'>
        <h2>{name}</h2>
        <p>{description}</p>
        <span>{timeStamp}</span>
        </div>
      </div>


      <div className='post-body'>
        <p>{message}</p>
      </div>

      <div className='post-buttons'>
        <InputOptions Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <InputOptions Icon={InsertCommentIcon} title="Comment" color="gray" />
        <InputOptions Icon={RepeatIcon} title="Repost" color="gray" />
        <InputOptions Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  )
}

export default Post