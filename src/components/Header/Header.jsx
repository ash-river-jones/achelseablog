import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import { navIcon } from '../../assets/icons/icons';

function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<>
			<header className='header'>
				<div className='header__toggle' onClick={toggleNav}>
					{navIcon()}
				</div>
				<div className='header__search'>search</div>
				<div className='header__logo'>Logo</div>
				<div className='header__login'></div>

				<nav className={`header__nav ${isNavOpen ? 'header__nav--open' : ''}`}>
					<ul className='header__nav-list'>
						<li className='header__nav-item'>
							<Link to='/' className='header__nav-link'>
								Home
							</Link>
						</li>
						<li className='header__nav-item'>
							<Link to='/about' className='header__nav-link'>
								About
							</Link>
						</li>
						<li className='header__nav-item'>
							<Link to='/blog' className='header__nav-link'>
								Blog
							</Link>
						</li>
						<li className='header__nav-item'>
							<Link to='/recipes' className='header__nav-link'>
								Recipes
							</Link>
						</li>
						<li className='header__nav-item'>
							<Link to='/contact' className='header__nav-link'>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;
