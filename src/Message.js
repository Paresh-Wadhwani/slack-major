import React from 'react';
import './Message.css';

function Message( { messageText, timeStamp, userName, userImage } ) {
    return (
        <div className = 'message'>
            <img src = {userImage} alt = ''/>
            <div classname = 'message__info'>
                <h4>{userName}</h4>
                <p>{messageText}</p>
            </div>
        </div>
    );
}

export default Message;
