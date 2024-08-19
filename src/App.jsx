import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<h1>Home Page</h1>} />
					<Route path='/about' element={<h1>About Page</h1>} />
					<Route path='/blog' element={<h1>Blog Page</h1>} />
					<Route path='/blog/:id' element={<h1>Blog Post Page</h1>} />
					<Route path='/contact' element={<h1>Contact Page</h1>} />
					<Route path='/recipes' element={<h1>Recipes Page</h1>} />
					<Route path='/recipes/:id' element={<h1>Recipe Page</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
