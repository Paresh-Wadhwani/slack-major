// import { Router } from '@material-ui/icons';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<div className = 'app__body'>
				<Sidebar />
				<Switch>
					<Route path = '/room/:roomId'>
						{/* <Chat /> */}
						<h1>chat</h1>
					</Route>
					<Route path = '/'>
						<h1>Welcome</h1>
					</Route>
				</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
