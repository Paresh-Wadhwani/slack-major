import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import Login from './Login.js';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useStateValue} from './StateProvider.js'

function App() {
	const [{user}, dispatch] = useStateValue();

	return (
		<div className="App">
			<Router>
				{
					!user
					? (
						<Login />
					) :
					(
						<>
						<Header />
						<div className = 'app__body'>
							<Sidebar />
							<Switch>
								<Route path = '/room/:roomId'>
									{<Chat />}
									
								</Route>
								<Route path = '/'>
									<h1>Welcome</h1>
								</Route>
							</Switch>
						</div>
						</>
					)
				}
			</Router>
		</div>
	);
}

export default App;
