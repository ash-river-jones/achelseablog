import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import NavIcon from '../../assets/icons/NavIcon.svg';
import UserIcon from '../../assets/icons/UserIcon.svg';
import SearchIcon from '../../assets/icons/SearchIcon.svg';

export default function Header() {
	const navigate = useNavigate();
	const navRef = useRef(null);
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		console.log('Searching for:', searchQuery);
		// Implement search functionality here
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setIsNavOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<header className='header'>
			<div className='header__container'>
				<button
					className='header__toggle'
					onClick={toggleNav}
					aria-expanded={isNavOpen}
					aria-controls='main-nav'
				>
					<img className='header__icon' src={NavIcon} alt='Toggle navigation menu' />
					<span className='header__visually-hidden'>Menu</span>
				</button>
				<div className='header__logo'>
					<Link to='/' className='header__logo-link'>
						<span aria-hidden='true'>AC</span>
						<span className='header__visually-hidden'>Awesome Cooking</span>
					</Link>
				</div>
				<div className='header__nav-wrapper'>
					<nav id='main-nav' ref={navRef} className={`header__nav ${isNavOpen ? 'header__nav--open' : ''}`}>
						<ul className='header__nav-list'>
							{['Home', 'About', 'Blog', 'Recipes', 'Contact'].map((item) => (
								<li key={item} className='header__nav-item'>
									<Link to={`/${item.toLowerCase()}`} className='header__nav-link'>
										{item}
									</Link>
								</li>
							))}
						</ul>
						<form onSubmit={handleSearch} className='header__search header__search--mobile'>
							<input
								type='search'
								placeholder='Search...'
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className='header__search-input'
								aria-label='Search'
							/>
							<button type='submit' className='header__search-button'>
								<img src={SearchIcon} alt='Search' className='header__icon' />
							</button>
						</form>
					</nav>
					<form onSubmit={handleSearch} className='header__search header__search--desktop'>
						<input
							type='search'
							placeholder='Search...'
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className='header__search-input'
							aria-label='Search'
						/>
						<button type='submit' className='header__search-button'>
							<img src={SearchIcon} alt='Search' className='header__icon' />
						</button>
					</form>
				</div>
				<button className='header__login' aria-label='Login'>
					<img src={UserIcon} alt='' className='header__icon' />
				</button>
			</div>
		</header>
	);
}
