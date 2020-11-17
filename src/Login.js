import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase.js';

function Login() {

	const signIn = e =>
	{
		auth.signInWithPopup(provider)
		.then(result =>
			{
				console.log(result);
			}
		)
		.catch(error =>
			{
				alert(error.message);
			}
		)
	}


	return (
		<div className = 'login'>
			<div className = 'login__container'>
				<img
					src = 'https://assets.brandfolder.com/pl546j-7le8zk-afym5u/original/Slack_Mark_Web.png'
					alt = ''
				/>
				<h1>Sign in to Slack Clone</h1>
				<p>Made by Paresh Wadhwani</p>
				<Button onClick = {signIn}>
					Sign In with Google
				</Button>
			</div>
		</div>
	)
}

export default Login
