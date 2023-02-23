import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../css/Header.css';

const Header = ({currentPage, handlePageChange}) => {
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
		<header className='header_container'>
			<Link to="/" className="logoLink">
				SurfShop
			</Link>
			<nav className="navContainer">
				<ul className="navList">
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