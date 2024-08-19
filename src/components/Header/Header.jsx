import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
	return (
		<>
			<header className='header'>
				<div className='header__nav'>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/contact'>Contact</Link>
				</div>
				<div className='header__search'>
					<input className='header__search-input' type='text' placeholder='Search' />
				</div>
				<Link to='/' className='header__logo'>
					<div className='header__logo-wrapper'>
						<img src='' alt='logo' />
					</div>
				</Link>
			</header>

			{/* <header className='header'>
				<nav className='header__nav'>
					<a>Home</a> | <a>About</a> |<a>Contact</a>
				</nav>
				<div className='header_search'>
					<input className='header_search-input' type='text' placeholder='Search' />
				</div>
				<div className='header__logo'>Logo</div>
			</header> */}
		</>
	);
}

export default Header;
