import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import '../../css/Header.css';
import { CartProvider } from '../../utils/cartContext';

const Header = ({ currentPage, handlePageChange }) => {
	const [dropDown, setDropdown] = useState(false);
	const [activeState, setActiveState] = useState('');
	const handleDropDown = () => {
		setDropdown((dropDown) => !dropDown);
		if (activeState === 'active') {
			setActiveState('');
		} else {
			setActiveState('active');
		}
	};
	return (
		<header className="headerContainer">
			<Link to="/" className="logoLink">
				SurfShop
			</Link>
			<nav className="navContainer">
				
				<ul className="navList">
					<SearchBar/>
					<NavBar
						currentPage={currentPage}
						handlePageChange={handlePageChange}
					/>
				</ul>
				<div className={`hamburger ${activeState}`} onClick={handleDropDown}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
					{dropDown ? (
						<ul className="navbarDropdown">
							<NavBar
								currentPage={currentPage}
								handlePageChange={handlePageChange}
							/>
						</ul>
					) : (
						<span></span>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
