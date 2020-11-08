import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';

function App() {
	return (
		<div className="App">
			<Header />
			<div className = 'app__body'>
			<Sidebar />
			{
				// router
			}
			</div>
		</div>
	);
}

export default App;
