import React from 'react';
import './Chat.css';
import { useParams } from  'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

function Chat() {
    const { roomId } = useParams();
    return (
        <div className = 'chat'>
            <h2>this is {roomId}</h2>
            <div className = 'chat__header'>
                <div className = 'chat__headerLeft'>
                    <div className = 'chat__headerLeft'>
                        <h4 className = 'chat__channelName'># General</h4>
                        <StarBorderOutlinedIcon />
                    </div>
                </div>
                <div className = 'chat__headerRight'>
                    a
                </div>
            </div>
        </div>
    )
}

export default Chat;