import React, {useState} from 'react';
import './ChatInput.css';
import {useStateValue} from './StateProvider.js';
import db from './firebase.js';
import firebase from 'firebase'


function ChatInput( {channelName, channelId}) {
	const [messageText, setMessageText] = useState('');
	const [{user}] = useStateValue();

	console.log(messageText);
	console.log(setMessageText);

	const sendMessage = (e) => {
		e.preventDefault();

		console.log(messageText, ' sent');
		console.log(channelId);

		if(channelId)
		{
			console.log(messageText, ' sent2');
			if(messageText)
			{
				console.log(messageText, ' sent3');
				db.collection('ROOM').doc(channelId).collection("MESSAGE").add(
						{
							MESSAGE_TEXT: messageText,
							SENDER_NAME: user.displayName,
							SENDER_PHOTO: user.photoURL,
							TIMESTAMP: firebase.firestore.FieldValue.serverTimestamp()
						}
					)
					console.log(messageText, ' sent4');
			}
		}
		setMessageText('');
	};
	return (
		<div className = 'chat-input'>
			<form>
				<input 
					placeholder = {`Message #${channelName?.toLowerCase()}`}
					value = {messageText}
					onChange = {e => setMessageText(e.target.value)}
				/>
				<button onClick = {sendMessage}>
					SEND
				</button>
			</form>
			
		</div>
	)
}

export default ChatInput
