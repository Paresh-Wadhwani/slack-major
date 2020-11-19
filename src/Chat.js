import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from  'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import  InfoOutlinedIcon  from '@material-ui/icons/InfoOutlined';
import db from './firebase';
import Message from './Message.js';
import ChatInput from './ChatInput.js';

function Chat() {
    const { roomId } = useParams();

    const [roomDetail, setRoomDetail] = useState();
    const [messages, setmessages] = useState([]);
    
    useEffect(() => {
            if (roomId) {
                db.collection('ROOM')
                .doc(roomId)
                .onSnapshot(snapshot => (setRoomDetail(snapshot.data())))
            }

            if (roomId) {
                db.collection('ROOM')
                .doc(roomId)
                .collection('MESSAGE')
                .orderBy('TIMESTAMP', 'asc')
                .onSnapshot(snapshot => setmessages(snapshot.docs.map(doc => doc.data())))
            }


        }, [roomId]);

    // console.log(db.collection('ROOM').doc(roomId));

    console.log(messages);


	return (
		<div className = 'chat'>
			<div className = 'chat__header'>
                <div className = 'chat__headerLeft'>
                    <h4 className = 'chat__channelName'>
                        <strong># {roomDetail?.NAME}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className = 'chat__headerRight'>
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className = 'chat__messages'>
                {
                    messages.map(message => (
                        <Message messageText = {message?.MESSAGE_TEXT} timeStamp = {message?.TIMESTAMP} userImage = {message?.SENDER_PHOTO} userName = {message?.SENDER_NAME} />
                    ))
                }
            </div>
			<ChatInput channelName = {roomDetail?.NAME} channelId = {roomId} />
		</div>
	)
}

export default Chat;