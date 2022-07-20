import React from 'react';
import { Avatar } from '@mui/material';
import './Message.css';

function Message({ message, timestamp, user, userImage }) {
    return (
        <div className='message'>

            <Avatar>CO</Avatar>
            <div className="message__info">
                <h4>{user} timestap.......</h4>
                <p>{message}</p>
            </div>

        </div>
    )
}

export default Message
