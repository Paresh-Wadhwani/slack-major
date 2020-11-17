import React from 'react';
import './Message.css';

function Message( { messageText, timeStamp, userName, userImage } ) {
    console.log(timeStamp.toDate())
    return (
        <div className = 'message'>
            <img src = {userImage} alt = ''/>
            <div classname = 'message__info'>
                <h4>{userName} <span className = 'message__timestamp'>{new Date(timeStamp.toDate()).toUTCString()}</span></h4>
                <p>{messageText}</p>
            </div>
        </div>
    );
}

export default Message;
